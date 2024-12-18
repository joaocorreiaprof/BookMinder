// bookGenreController.js

const pool = require("../db/db"); // Assuming you're using a PostgreSQL database

// Add a new book-genre association
const addBookGenre = async (req, res) => {
  const { book_id, genre_id } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO book_genres (book_id, genre_id) VALUES ($1, $2) RETURNING *",
      [book_id, genre_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error adding book-genre association:", err);
    res.status(500).json({ error: "Failed to add book-genre association" });
  }
};

// Get all book-genre associations
const getBookGenres = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM book_genres");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching book-genre associations:", err);
    res.status(500).json({ error: "Failed to fetch book-genre associations" });
  }
};

// Get a specific book-genre association by ID
const getBookGenreByID = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM book_genres WHERE book_genre_id = $1",
      [id]
    );
    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ error: "Book-genre association not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching book-genre association:", err);
    res.status(500).json({ error: "Failed to fetch book-genre association" });
  }
};

// Delete a book-genre association
const deleteBookGenre = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM book_genres WHERE book_genre_id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ error: "Book-genre association not found" });
    }
    res
      .status(200)
      .json({ message: "Book-genre association deleted successfully" });
  } catch (err) {
    console.error("Error deleting book-genre association:", err);
    res.status(500).json({ error: "Failed to delete book-genre association" });
  }
};

const getBooksByGenre = async (req, res) => {
  const { genreId } = req.params;
  try {
    const result = await pool.query(
      `SELECT b.*
       FROM books b
       JOIN book_genres bg ON b.book_id = bg.book_id
       WHERE bg.genre_id = $1`,
      [genreId]
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching books by genre:", err);
    res.status(500).json({ error: "Failed to fetch books by genre" });
  }
};

module.exports = {
  addBookGenre,
  getBookGenres,
  getBookGenreByID,
  deleteBookGenre,
  getBooksByGenre,
};
