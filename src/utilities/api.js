export const URL = "https://reqres.in/api";

export async function create(data) {
  if (!data) return;

  const response = await fetch(`${URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}
