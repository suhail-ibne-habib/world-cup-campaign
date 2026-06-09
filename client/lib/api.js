const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function getFifaTeams() {
  const response = await fetch(`${API_BASE_URL}/api/fifa-teams`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch FIFA teams.");
  }

  return response.json();
}

export async function verifyUserEmail(email) {
  const response = await fetch(`${API_BASE_URL}/api/users/verify-email`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to verify email.");
  }

  return data;
}

export async function selectTeams({ email, manualTeamId }) {
  const response = await fetch(`${API_BASE_URL}/api/join/select-teams`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, manualTeamId }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to assign teams.");
  }

  return data;
}
