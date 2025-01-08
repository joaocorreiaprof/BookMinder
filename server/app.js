const express = require("express");
const cors = require("cors");
const path = require("path");
const pool = require("./db/db");

// Route imports
const booksRoutes = require("./routes/booksRoutes");
const authorsRoutes = require("./routes/authorRoutes");
const genresRoutes = require("./routes/genresRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
const bookAuthorRoutes = require("./routes/bookAuthorRoutes");
const bookGenreRoutes = require("./routes/bookGenreRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api", booksRoutes);
app.use("/api", authorsRoutes);
app.use("/api", genresRoutes);
app.use("/api", inventoryRoutes);
app.use("/api", bookAuthorRoutes);
app.use("/api", bookGenreRoutes);

// For development, use Vite's server
if (process.env.NODE_ENV === "development") {
  // You do not need to do anything here for frontend routing; Vite handles it
  app.use(express.static(path.join(__dirname, "client", "public")));
} else {
  // In production, serve static files from the build folder
  app.use(express.static(path.join(__dirname, "client", "dist")));

  // Catch-all to send React's index.html for any unmatched routes
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  });
}

// Base route for API
app.get("/", (req, res) => {
  res.send("Welcome to the Inventory Application API!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
