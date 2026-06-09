import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { testConnection } from "./config/db.js";
import healthRouter from "./routes/health.js";
import registrationsRouter from "./routes/registrations.js";
import fifaTeamsRouter from "./routes/fifaTeams.js";
import usersRouter from "./routes/users.js";
import joinRouter from "./routes/join.js";
import exportRouter from "./routes/export.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "World Cup Campaign API" });
});

app.use("/api/health", healthRouter);
app.use("/api/registrations", registrationsRouter);
app.use("/api/fifa-teams", fifaTeamsRouter);
app.use("/api/users", usersRouter);
app.use("/api/join", joinRouter);
app.use("/export", exportRouter);

async function startServer() {
  try {
    await testConnection();
    console.log("MySQL connected successfully.");
  } catch (error) {
    console.warn("MySQL connection failed:", error.message);
    console.warn("Server will start, but database routes may not work until MySQL is configured.");
  }

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
