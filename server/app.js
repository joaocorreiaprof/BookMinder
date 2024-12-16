const express = require("express");
const cors = require("cors");
const pool = require("./db/db");
const booksRoutes = require("./routes/booksRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Inventory Application API!");
});

app.use("/api", booksRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
