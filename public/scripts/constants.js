const isProduction = window.location.hostname !== "localhost";
export const baseUrl = isProduction
  ? "https://pork-j1zx.onrender.com"
  : "http://localhost:8000";
