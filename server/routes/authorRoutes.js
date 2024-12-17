const express = require("express");
const router = express.Router();
const {
  createAuthor,
  getAuthors,
  getAuthorID,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/authorController");

// Create a new author
router.post("/authors", createAuthor);

// Get all authors
router.get("/authors", getAuthors);

// Get a specific author by ID
router.get("/authors/:id", getAuthorID);

// Update an author
router.put("/authors/:id", updateAuthor);

// Delete an author
router.delete("/authors/:id", deleteAuthor);

module.exports = router;
