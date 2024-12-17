const express = require("express");
const router = express.Router();
const {
  createGenre,
  getGenres,
  getGenreID,
  updateGenre,
  deleteGenre,
} = require("../controllers/genresController");

// Create a new genre
router.post("/genres", createGenre);

// Get all genres
router.get("/genres", getGenres);

// Get a specific genre by ID
router.get("/genres/:id", getGenreID);

// Update a genre
router.put("/genres/:id", updateGenre);

// Delete a genre
router.delete("/genres/:id", deleteGenre);

module.exports = router;
