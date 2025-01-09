import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  connectionString:
    "postgresql://postgres:ggXHEvsGhREBtzyBOtRiehmYQGKQUDXt@roundhouse.proxy.rlwy.net:50082/railway",
});

export default api;
