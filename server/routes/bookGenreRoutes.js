const express = require("express");
const router = express.Router();
const {
  addBookGenre,
  getBookGenres,
  getBookGenreByID,
  deleteBookGenre,
} = require("../controllers/bookGenreController");

// Add a new book-genre association
router.post("/book-genres", addBookGenre);

// Get all book-genre associations
router.get("/book-genres", getBookGenres);

// Get a specific book-genre association by ID
router.get("/book-genres/:id", getBookGenreByID);

// Delete a book-genre association
router.delete("/book-genres/:id", deleteBookGenre);

module.exports = router;
