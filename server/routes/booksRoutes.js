const express = require("express");
const router = express.Router();
const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/booksController");

// Create a new book
router.post("/books", createBook);

// Get all books
router.get("/books", getBooks);

// Get a specific book by ID
router.get("/books/:id", getBookById);

// Update a book
router.put("/books/:id", updateBook);

// Delete a book
router.delete("/books/:id", deleteBook);

module.exports = router;
