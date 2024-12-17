const express = require("express");
const router = express.Router();
const {
  addBookAuthor,
  getBookAuthors,
  getBookAuthorByID,
  deleteBookAuthor,
} = require("../controllers/bookAuthorController");

// Add a new book-author association
router.post("/book-authors", addBookAuthor);

// Get all book-author associations
router.get("/book-authors", getBookAuthors);

// Get a specific book-author association by ID
router.get("/book-authors/:id", getBookAuthorByID);

// Delete a book-author association
router.delete("/book-authors/:id", deleteBookAuthor);

module.exports = router;
