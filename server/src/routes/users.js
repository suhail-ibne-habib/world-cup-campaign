import { Router } from "express";
import pool from "../config/db.js";
import { requireApiKey } from "../middleware/apiKeyAuth.js";

const router = Router();

const VALID_USER_TYPES = ["agent", "brokerage"];
const VALID_MEMBERSHIP_STATUSES = ["free", "paid"];

function normalizeUser(raw, index) {
  const errors = [];

  if (!raw || typeof raw !== "object") {
    return { errors: [`users[${index}]: must be an object.`] };
  }

  const userId = raw.user_id ?? raw.userId;
  const name = raw.name;
  const email = raw.email;
  const userType = String(raw.user_type ?? raw.userType ?? "").toLowerCase().trim();
  const membershipStatus = String(raw.membership_status ?? raw.membershipStatus ?? "")
    .toLowerCase()
    .trim();
  const subscriptionPackage = raw.subscription_package ?? raw.subscriptionPackage;

  if (!userId) errors.push(`users[${index}].user_id is required.`);
  if (!name) errors.push(`users[${index}].name is required.`);
  if (!email) errors.push(`users[${index}].email is required.`);
  if (!userType || !VALID_USER_TYPES.includes(userType)) {
    errors.push(`users[${index}].user_type must be one of: ${VALID_USER_TYPES.join(", ")}.`);
  }
  if (!membershipStatus || !VALID_MEMBERSHIP_STATUSES.includes(membershipStatus)) {
    errors.push(
      `users[${index}].membership_status must be one of: ${VALID_MEMBERSHIP_STATUSES.join(", ")}.`
    );
  }
  if (!subscriptionPackage) {
    errors.push(`users[${index}].subscription_package is required.`);
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push(`users[${index}].email must be a valid email address.`);
  }

  if (errors.length > 0) {
    return { errors };
  }

  return {
    user: {
      user_id: String(userId),
      name: String(name),
      email: String(email).toLowerCase(),
      user_type: userType,
      membership_status: membershipStatus,
      subscription_package: String(subscriptionPackage),
    },
  };
}

router.post("/verify-email", async (req, res) => {
  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({
      exists: false,
      message: "Please enter a valid email address.",
    });
  }

  try {
    const [rows] = await pool.query(
      `SELECT id, user_id, name, email, user_type, membership_status, subscription_package
       FROM users WHERE email = ? LIMIT 1`,
      [String(email).toLowerCase().trim()]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        exists: false,
        message:
          "This email is not registered with Deal360. Please sign up first or use your registered email.",
      });
    }

    const user = rows[0];

    const [existingTeams] = await pool.query(
      `SELECT uct.selection_type, t.id, t.name, t.flag, t.fifa_code, t.\`groups\`, t.choose_cound
       FROM users_chosen_team uct
       JOIN m_worldcup_teams t ON t.id = uct.m_worldcup_teams_id
       WHERE uct.users_id = ?
       ORDER BY uct.selection_type`,
      [user.id]
    );

    const userPayload = {
      id: user.id,
      userId: user.user_id,
      name: user.name,
      email: user.email,
      userType: user.user_type,
      membershipStatus: user.membership_status,
      subscriptionPackage: user.subscription_package,
    };

    if (existingTeams.length > 0) {
      return res.json({
        exists: true,
        alreadyJoined: true,
        message: "You have already joined the campaign.",
        user: userPayload,
        teams: existingTeams.map((team) => ({
          id: team.id,
          name: team.name,
          flag: team.flag,
          fifaCode: team.fifa_code,
          groups: team.groups,
          selectionType: team.selection_type,
          slotsLeft: Math.max(0, 3 - team.choose_cound),
        })),
      });
    }

    res.json({
      exists: true,
      alreadyJoined: false,
      message: "Email verified. You can continue to team selection.",
      user: userPayload,
    });
  } catch (error) {
    res.status(500).json({
      exists: false,
      message: "Unable to verify email right now. Please try again.",
      error: error.message,
    });
  }
});

router.post("/", requireApiKey, async (req, res) => {
  const { users } = req.body;

  if (!Array.isArray(users) || users.length === 0) {
    return res.status(400).json({
      message: "Request body must include a non-empty users array.",
    });
  }

  const normalizedUsers = [];
  const validationErrors = [];

  users.forEach((rawUser, index) => {
    const result = normalizeUser(rawUser, index);
    if (result.errors) {
      validationErrors.push(...result.errors);
    } else {
      normalizedUsers.push(result.user);
    }
  });

  if (validationErrors.length > 0) {
    return res.status(400).json({
      message: "Validation failed.",
      errors: validationErrors,
    });
  }

  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const inserted = [];

    for (const user of normalizedUsers) {
      const [result] = await connection.query(
        `INSERT INTO users (user_id, name, email, user_type, membership_status, subscription_package)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [
          user.user_id,
          user.name,
          user.email,
          user.user_type,
          user.membership_status,
          user.subscription_package,
        ]
      );

      inserted.push({
        id: result.insertId,
        ...user,
      });
    }

    await connection.commit();

    res.status(201).json({
      message: `${inserted.length} user(s) created successfully.`,
      count: inserted.length,
      users: inserted,
    });
  } catch (error) {
    await connection.rollback();

    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        message: "One or more users already exist (duplicate email or user_id).",
        error: error.message,
      });
    }

    res.status(500).json({
      message: "Failed to create users.",
      error: error.message,
    });
  } finally {
    connection.release();
  }
});

export default router;
