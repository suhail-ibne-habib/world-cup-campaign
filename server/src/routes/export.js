import { Router } from "express";
import ExcelJS from "exceljs";
import pool from "../config/db.js";

const router = Router();

const COLUMNS = [
  { header: "User DB ID", key: "userDbId", width: 12 },
  { header: "User ID", key: "userId", width: 18 },
  { header: "Name", key: "name", width: 24 },
  { header: "Email", key: "email", width: 28 },
  { header: "User Type", key: "userType", width: 14 },
  { header: "Membership Status", key: "membershipStatus", width: 18 },
  { header: "Subscription Package", key: "subscriptionPackage", width: 22 },
  { header: "Team Name", key: "teamName", width: 22 },
  { header: "FIFA Code", key: "fifaCode", width: 12 },
  { header: "Group", key: "group", width: 10 },
  { header: "Selection Type", key: "selectionType", width: 16 },
];

router.get("/:secretKey", async (req, res) => {
  const { secretKey } = req.params;

  if (!process.env.EXPORT_SECRET_KEY) {
    return res.status(500).json({ message: "Export secret key is not configured on the server." });
  }

  if (!secretKey || secretKey !== process.env.EXPORT_SECRET_KEY) {
    return res.status(401).json({ message: "Unauthorized. Invalid export key." });
  }

  try {
    const [rows] = await pool.query(
      `SELECT
         u.id AS userDbId,
         u.user_id AS userId,
         u.name,
         u.email,
         u.user_type AS userType,
         u.membership_status AS membershipStatus,
         u.subscription_package AS subscriptionPackage,
         t.name AS teamName,
         t.fifa_code AS fifaCode,
         t.\`groups\` AS \`group\`,
         uct.selection_type AS selectionType,
         uct.id AS selectionId
       FROM users u
       LEFT JOIN users_chosen_team uct ON uct.users_id = u.id
       LEFT JOIN m_worldcup_teams t ON t.id = uct.m_worldcup_teams_id
       ORDER BY u.id ASC, uct.selection_type ASC`
    );

    const workbook = new ExcelJS.Workbook();
    workbook.creator = "World Cup Campaign";
    workbook.created = new Date();

    const sheet = workbook.addWorksheet("User Team Export");
    sheet.columns = COLUMNS;

    sheet.getRow(1).font = { bold: true };
    sheet.getRow(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFE2E8F0" },
    };

    if (rows.length === 0) {
      sheet.addRow({
        userDbId: "",
        userId: "",
        name: "No data available",
        email: "",
        userType: "",
        membershipStatus: "",
        subscriptionPackage: "",
        teamName: "",
        fifaCode: "",
        group: "",
        selectionType: "",
      });
    } else {
      for (const row of rows) {
        sheet.addRow({
          userDbId: row.userDbId,
          userId: row.userId,
          name: row.name,
          email: row.email,
          userType: row.userType,
          membershipStatus: row.membershipStatus,
          subscriptionPackage: row.subscriptionPackage,
          teamName: row.teamName || "",
          fifaCode: row.fifaCode || "",
          group: row.group || "",
          selectionType: row.selectionType || "not joined",
        });
      }
    }

    const timestamp = new Date().toISOString().slice(0, 10);
    const filename = `world-cup-users-export-${timestamp}.xlsx`;

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    res.status(500).json({
      message: "Failed to export data.",
      error: error.message,
    });
  }
});

export default router;
