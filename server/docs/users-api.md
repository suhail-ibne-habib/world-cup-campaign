# Users API

Bulk create users for the World Cup Campaign.

## Endpoints

### Verify email (join flow)

```
POST /api/users/verify-email
```

Public endpoint — no API key required. Used in the join form step 1 to check if an email exists in the `users` table.

**Request:**
```json
{ "email": "jane@example.com" }
```

**Success (`200`):**
```json
{
  "exists": true,
  "message": "Email verified. You can continue to team selection.",
  "user": {
    "id": 1,
    "userId": "USR-1001",
    "name": "Jane Agent",
    "email": "jane@example.com",
    "userType": "agent",
    "membershipStatus": "free",
    "subscriptionPackage": "Basic"
  }
}
```

**Not found (`404`):**
```json
{
  "exists": false,
  "message": "This email is not registered with Deal360. Please sign up first or use your registered email."
}
```

---

### Bulk create users

```
POST /api/users
```

## Authentication

This endpoint requires an API key. Set `USERS_API_KEY` in `server/.env`.

Send the key using either header:

```
X-API-Key: your_secret_key
```

or

```
Authorization: Bearer your_secret_key
```

Requests without a valid key receive `401 Unauthorized`.

## Request Body

Send a JSON object with a `users` array. Each item supports snake_case or camelCase field names.

```json
{
  "users": [
    {
      "user_id": "USR-1001",
      "name": "Jane Agent",
      "email": "jane@example.com",
      "user_type": "AGENT",
      "membership_status": "FREE",
      "subscription_package": "Basic"
    },
    {
      "userId": "USR-1002",
      "name": "John Broker",
      "email": "john@example.com",
      "userType": "Brokerage",
      "membershipStatus": "Paid",
      "subscriptionPackage": "Pro"
    }
  ]
}
```

### Fields

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `user_id` | string | Yes | External user identifier |
| `name` | string | Yes | Full name |
| `email` | string | Yes | Must be a valid email; stored lowercase |
| `user_type` | enum | Yes | `agent` or `brokerage` (case-insensitive) |
| `membership_status` | enum | Yes | `free` or `paid` (case-insensitive) |
| `subscription_package` | string | Yes | Package name |

Enum values are always converted to lowercase before insert.

## Success Response

**Status:** `201 Created`

```json
{
  "message": "2 user(s) created successfully.",
  "count": 2,
  "users": [
    {
      "id": 1,
      "user_id": "USR-1001",
      "name": "Jane Agent",
      "email": "jane@example.com",
      "user_type": "agent",
      "membership_status": "free",
      "subscription_package": "Basic"
    }
  ]
}
```

## Error Responses

| Status | When |
|--------|------|
| `400` | Missing/invalid body or validation errors |
| `401` | Missing or invalid API key |
| `409` | Duplicate `email` or `user_id` |
| `500` | Server or database error |

### Validation error example

```json
{
  "message": "Validation failed.",
  "errors": [
    "users[0].user_type must be one of: agent, brokerage."
  ]
}
```

## Example (cURL)

```bash
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_secret_key" \
  -d '{
    "users": [
      {
        "user_id": "USR-1001",
        "name": "Jane Agent",
        "email": "jane@example.com",
        "user_type": "agent",
        "membership_status": "free",
        "subscription_package": "Basic"
      }
    ]
  }'
```

## Database Setup

Run the users table migration:

```bash
mysql -u root -p world_cup_campaign < src/db/users-schema.sql
```

Or apply the SQL from `src/db/users-schema.sql` in phpMyAdmin.
