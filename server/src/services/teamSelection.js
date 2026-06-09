const MAX_TEAM_SLOTS = 3;

function pickRandomTeam(teams) {
  const index = Math.floor(Math.random() * teams.length);
  return teams[index];
}

async function getTeamById(connection, teamId) {
  const [rows] = await connection.query(
    `SELECT id, name, flag, fifa_code, \`groups\`, choose_cound
     FROM m_worldcup_teams WHERE id = ?`,
    [teamId]
  );
  return rows[0] || null;
}

function formatTeam(team, selectionType) {
  return {
    id: team.id,
    name: team.name,
    flag: team.flag,
    fifaCode: team.fifa_code,
    groups: team.groups,
    selectionType,
    slotsLeft: Math.max(0, MAX_TEAM_SLOTS - team.choose_cound),
  };
}

async function reserveTeamSlot(connection, teamId) {
  const [lockedRows] = await connection.query(
    `SELECT id, name, flag, fifa_code, \`groups\`, choose_cound
     FROM m_worldcup_teams
     WHERE id = ? AND choose_cound < ?
     FOR UPDATE`,
    [teamId, MAX_TEAM_SLOTS]
  );

  if (lockedRows.length === 0) {
    return null;
  }

  const [updateResult] = await connection.query(
    `UPDATE m_worldcup_teams
     SET choose_cound = choose_cound + 1
     WHERE id = ? AND choose_cound < ?`,
    [teamId, MAX_TEAM_SLOTS]
  );

  if (updateResult.affectedRows !== 1) {
    return null;
  }

  return {
    ...lockedRows[0],
    choose_cound: lockedRows[0].choose_cound + 1,
  };
}

async function getAvailableTeamsForUpdate(connection, excludeTeamIds = []) {
  const excludeClause =
    excludeTeamIds.length > 0
      ? `AND id NOT IN (${excludeTeamIds.map(() => "?").join(", ")})`
      : "";

  const [rows] = await connection.query(
    `SELECT id, name, flag, fifa_code, \`groups\`, choose_cound
     FROM m_worldcup_teams
     WHERE choose_cound < ? ${excludeClause}
     FOR UPDATE`,
    [MAX_TEAM_SLOTS, ...excludeTeamIds]
  );

  return rows;
}

async function assignRandomTeam(connection, userId, excludeTeamIds = []) {
  const availableTeams = await getAvailableTeamsForUpdate(connection, excludeTeamIds);

  if (availableTeams.length === 0) {
    throw new Error("NO_AVAILABLE_TEAMS");
  }

  const shuffled = [...availableTeams].sort(() => Math.random() - 0.5);

  for (const candidate of shuffled) {
    const reserved = await reserveTeamSlot(connection, candidate.id);
    if (!reserved) continue;

    await connection.query(
      `INSERT INTO users_chosen_team (users_id, m_worldcup_teams_id, selection_type)
       VALUES (?, ?, 'auto')`,
      [userId, reserved.id]
    );

    return formatTeam(reserved, "auto");
  }

  throw new Error("NO_AVAILABLE_TEAMS");
}

export async function selectTeamsForUser(pool, { email, manualTeamId = null }) {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const [users] = await connection.query(
      `SELECT id, name, email, membership_status
       FROM users WHERE email = ? LIMIT 1 FOR UPDATE`,
      [String(email).toLowerCase().trim()]
    );

    if (users.length === 0) {
      throw new Error("USER_NOT_FOUND");
    }

    const user = users[0];

    const [existingSelections] = await connection.query(
      `SELECT id FROM users_chosen_team WHERE users_id = ? LIMIT 1`,
      [user.id]
    );

    if (existingSelections.length > 0) {
      throw new Error("ALREADY_JOINED");
    }

    const assignedTeams = [];

    if (user.membership_status === "free") {
      if (manualTeamId) {
        throw new Error("MANUAL_NOT_ALLOWED");
      }

      const autoTeam = await assignRandomTeam(connection, user.id);
      assignedTeams.push(autoTeam);
    } else if (user.membership_status === "paid") {
      if (!manualTeamId) {
        throw new Error("MANUAL_REQUIRED");
      }

      const manualTeam = await getTeamById(connection, manualTeamId);
      if (!manualTeam) {
        throw new Error("MANUAL_TEAM_NOT_FOUND");
      }

      if (manualTeam.choose_cound >= MAX_TEAM_SLOTS) {
        throw new Error("MANUAL_TEAM_FULL");
      }

      const autoTeam = await assignRandomTeam(connection, user.id, [Number(manualTeamId)]);

      if (autoTeam.id === Number(manualTeamId)) {
        throw new Error("MANUAL_SAME_AS_AUTO");
      }

      const reservedManual = await reserveTeamSlot(connection, Number(manualTeamId));
      if (!reservedManual) {
        throw new Error("MANUAL_TEAM_FULL");
      }

      await connection.query(
        `INSERT INTO users_chosen_team (users_id, m_worldcup_teams_id, selection_type)
         VALUES (?, ?, 'manual')`,
        [user.id, reservedManual.id]
      );

      assignedTeams.push(autoTeam);
      assignedTeams.push(formatTeam(reservedManual, "manual"));
    } else {
      throw new Error("INVALID_MEMBERSHIP");
    }

    await connection.commit();

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        membershipStatus: user.membership_status,
      },
      teams: assignedTeams,
    };
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

export function mapSelectionError(error) {
  const messages = {
    USER_NOT_FOUND: {
      status: 404,
      message: "User not found. Please verify your email again.",
    },
    ALREADY_JOINED: {
      status: 409,
      message: "You have already joined the campaign.",
    },
    MANUAL_NOT_ALLOWED: {
      status: 400,
      message: "Free members cannot choose a team manually.",
    },
    MANUAL_REQUIRED: {
      status: 400,
      message: "Paid members must choose a second team.",
    },
    MANUAL_TEAM_NOT_FOUND: {
      status: 404,
      message: "Selected team was not found.",
    },
    MANUAL_TEAM_FULL: {
      status: 409,
      message: "That team is full. Please choose another team.",
    },
    MANUAL_SAME_AS_AUTO: {
      status: 409,
      message: "Your manual team cannot be the same as your random team. Please try again.",
    },
    NO_AVAILABLE_TEAMS: {
      status: 409,
      message: "No teams are currently available. Please try again later.",
    },
    INVALID_MEMBERSHIP: {
      status: 400,
      message: "Invalid membership status.",
    },
  };

  return (
    messages[error.message] || {
      status: 500,
      message: "Failed to assign teams. Please try again.",
    }
  );
}
