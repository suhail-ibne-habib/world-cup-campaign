import { Router } from "express";
import pool from "../config/db.js";

const router = Router();

router.post("/", async (req, res) => {
  const { email, teamName, teamFlag } = req.body;

  if (!email || !teamName || !teamFlag) {
    return res.status(400).json({ message: "email, teamName, and teamFlag are required." });
  }

  try {
    const [result] = await pool.query(
      "INSERT INTO campaign_registrations (email, team_name, team_flag) VALUES (?, ?, ?)",
      [email, teamName, teamFlag]
    );

    res.status(201).json({
      message: "Successfully joined the campaign.",
      id: result.insertId,
      email,
      teamName,
      teamFlag,
    });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ message: "This email is already registered." });
    }

    res.status(500).json({ message: "Failed to save registration.", error: error.message });
  }
});

router.get("/", async (_req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, email, team_name AS teamName, team_flag AS teamFlag, created_at AS createdAt FROM campaign_registrations ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch registrations.", error: error.message });
  }
});

export default router;
