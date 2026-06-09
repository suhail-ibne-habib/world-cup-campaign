export function requireApiKey(req, res, next) {
  const headerKey = req.headers["x-api-key"];
  const bearerKey = req.headers.authorization?.replace(/^Bearer\s+/i, "");
  const apiKey = headerKey || bearerKey;

  if (!process.env.USERS_API_KEY) {
    return res.status(500).json({ message: "API key is not configured on the server." });
  }

  if (!apiKey || apiKey !== process.env.USERS_API_KEY) {
    return res.status(401).json({ message: "Unauthorized. Invalid or missing API key." });
  }

  next();
}
