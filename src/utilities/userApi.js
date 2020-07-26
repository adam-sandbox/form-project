const API_URL = "https://reqres.in/api/users";

export default {
  create: async (data) => {
    if (!data) return;
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};
