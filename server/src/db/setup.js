import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import pool from "../config/db.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function runSqlFile(filename) {
  const filePath = path.join(__dirname, filename);
  const sql = fs.readFileSync(filePath, "utf8");
  const statements = sql
    .split(";")
    .map((s) => s.trim())
    .filter((s) => s && !s.startsWith("--"));

  for (const statement of statements) {
    await pool.query(statement);
  }
}

async function setup() {
  try {
    await runSqlFile("schema.sql");
    await runSqlFile("users-schema.sql");
    await runSqlFile("chosen-teams-schema.sql");
    console.log("Schema applied.");

    const [rows] = await pool.query("SELECT COUNT(*) AS count FROM fifa_teams");
    if (rows[0].count === 0) {
      await runSqlFile("seed-fifa-teams.sql");
      console.log("Seed data inserted.");
    } else {
      console.log("FIFA teams already exist, skipping seed.");
    }
  } catch (error) {
    console.error("Setup failed:", error.message || error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

setup();
