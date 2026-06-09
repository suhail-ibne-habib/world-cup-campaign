import { Router } from "express";
import pool from "../config/db.js";
import { selectTeamsForUser, mapSelectionError } from "../services/teamSelection.js";

const router = Router();

router.post("/select-teams", async (req, res) => {
  const { email, manualTeamId } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({
      message: "A valid email is required.",
    });
  }

  try {
    const result = await selectTeamsForUser(pool, {
      email,
      manualTeamId: manualTeamId ? Number(manualTeamId) : null,
    });

    res.status(201).json({
      message: "Teams assigned successfully.",
      ...result,
    });
  } catch (error) {
    const mapped = mapSelectionError(error);
    res.status(mapped.status).json({ message: mapped.message });
  }
});

export default router;
