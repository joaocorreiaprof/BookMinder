import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "https://inventory-application-production-4de2.up.railway.app/", // Redirects API calls to your backend
    },
  },
});
