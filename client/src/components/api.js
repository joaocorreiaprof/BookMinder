import axios from "axios";

const isLocal = window.location.hostname === "localhost"; // Check if running locally

const api = axios.create({
<<<<<<< HEAD
  baseURL: isLocal
    ? "http://localhost:3000" // Local API endpoint
    : "https://roundhouse.proxy.rlwy.net:50082/railway", // Railway API endpoint
=======
  connectionString:
    "postgresql://postgres:ggXHEvsGhREBtzyBOtRiehmYQGKQUDXt@roundhouse.proxy.rlwy.net:50082/railway",
>>>>>>> dce09f9522e5f52730ec8b00e09dc1e69803fd98
});

export default api;
