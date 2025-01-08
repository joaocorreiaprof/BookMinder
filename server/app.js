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

// Serve static files from the Vite build folder (dist)
app.use(express.static(path.join(__dirname, "..", "client", "dist"))); // Serve static files

// Base route to serve the frontend
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html")); // Serve the entry point of your app
});

// API routes
app.use("/api", booksRoutes);
app.use("/api", authorsRoutes);
app.use("/api", genresRoutes);
app.use("/api", inventoryRoutes);
app.use("/api", bookAuthorRoutes);
app.use("/api", bookGenreRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
