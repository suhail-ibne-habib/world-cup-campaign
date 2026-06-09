# Export API

Download an Excel file with user details and their chosen World Cup teams.

## Endpoint

Then the export URL is:

```
https://floralwhite-porcupine-641191.hostingersite.com/export/wc_export_secret_2026
```

Open this URL in a browser or use cURL to download the file.

## Authentication

The secret key is part of the URL path. If the key is missing or wrong, the API returns:

**Status:** `401 Unauthorized`

```json
{
  "message": "Unauthorized. Invalid export key."
}
```

## Response

**Success:** Downloads an `.xlsx` Excel file.

**Filename format:** `world-cup-users-export-YYYY-MM-DD.xlsx`

### Excel columns

| Column | Description |
|--------|-------------|
| User DB ID | Internal `users.id` |
| User ID | External `users.user_id` |
| Name | User full name |
| Email | User email |
| User Type | `agent` or `brokerage` |
| Membership Status | `free` or `paid` |
| Subscription Package | User package name |
| Team Name | Chosen team name |
| FIFA Code | Team FIFA code |
| Group | World Cup group |
| Selection Type | `auto` (random) or `manual` (user choice) |

### Row layout

- **Paid members** with 2 teams appear as **2 rows** (one per team).
- **Free members** with 1 random team appear as **1 row**.
- **Users who have not joined** appear as **1 row** with `not joined` in the Selection Type column.

## Example (cURL)

```bash
curl -O -J "https://floralwhite-porcupine-641191.hostingersite.com/export/wc_export_secret_2026"
```

The `-O -J` flags save the downloaded Excel file with the correct filename.

## Errors

| Status | When |
|--------|------|
| `401` | Invalid or missing export key in URL |
| `500` | Server error or `EXPORT_SECRET_KEY` not set in `.env` |
