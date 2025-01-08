const express = require("express");
const cors = require("cors");
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

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
