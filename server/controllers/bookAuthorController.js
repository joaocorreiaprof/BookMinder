// bookAuthorController.js

const pool = require("../db/db");

// Add a new book-author association
const addBookAuthor = async (req, res) => {
  const { book_id, author_id } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO book_authors (book_id, author_id) VALUES ($1, $2) RETURNING *",
      [book_id, author_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error adding book-author association:", err);
    res.status(500).json({ error: "Failed to add book-author association" });
  }
};

// Get all book-author associations
const getBookAuthors = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM book_authors");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching book-author associations:", err);
    res.status(500).json({ error: "Failed to fetch book-author associations" });
  }
};

// Get a specific book-author association by ID
const getBookAuthorByID = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM book_authors WHERE book_author_id = $1",
      [id]
    );
    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ error: "Book-author association not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching book-author association:", err);
    res.status(500).json({ error: "Failed to fetch book-author association" });
  }
};

// Delete a book-author association
const deleteBookAuthor = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM book_authors WHERE book_author_id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ error: "Book-author association not found" });
    }
    res
      .status(200)
      .json({ message: "Book-author association deleted successfully" });
  } catch (err) {
    console.error("Error deleting book-author association:", err);
    res.status(500).json({ error: "Failed to delete book-author association" });
  }
};

const getBooksByAuthor = async (req, res) => {
  const { authorId } = req.params;
  try {
    const result = await pool.query(
      `SELECT b.* FROM books b JOIN book_authors ba ON b.book_id = ba.book_id WHERE ba.author_id = $1`,
      [authorId]
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching books by author:", err);
    res.status(500).json({ error: "Failed to fetch books by author" });
  }
};

module.exports = {
  addBookAuthor,
  getBookAuthors,
  getBookAuthorByID,
  deleteBookAuthor,
  getBooksByAuthor,
};
