import axios from "axios";

const isLocal = window.location.hostname === "localhost"; // Check if running locally

const api = axios.create({
  baseURL: isLocal
    ? "http://localhost:3000" // Local API endpoint
    : "https://roundhouse.proxy.rlwy.net:50082/railway", // Railway API endpoint
});

export default api;
