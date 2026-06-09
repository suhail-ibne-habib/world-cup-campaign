import { Router } from "express";
import pool from "../config/db.js";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT id, name, flag, fifa_code AS fifaCode, \`groups\`,
              choose_cound AS chooseCount,
              GREATEST(0, 3 - choose_cound) AS slotsLeft
       FROM m_worldcup_teams
       ORDER BY \`groups\`, name`
    );

    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch FIFA teams.", error: error.message });
  }
});

export default router;
