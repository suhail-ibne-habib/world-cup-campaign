# Users API

Bulk create users for the World Cup Campaign.

## Endpoints

### Bulk create users

```
POST /api/users
```

## Authentication

This endpoint requires an API key. Set `USERS_API_KEY` in `server/.env`.

Send the key using either header:

```
X-API-Key: wc_campaign_secret_key_2026
```

or

```
Authorization: Bearer wc_campaign_secret_key_2026
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
curl -X POST https://floralwhite-porcupine-641191.hostingersite.com/api/users \
  -H "Content-Type: application/json" \
  -H "X-API-Key: wc_campaign_secret_key_2026" \
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
