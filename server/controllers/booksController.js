const pool = require("../db/db");

// Create a new book
const createBook = async (req, res) => {
  const {
    title,
    author,
    genre,
    publisher,
    publication_year,
    description,
    language,
    cover_image_url,
  } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO books (title, author, genre, publisher, publication_year, description, language, cover_image_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        title,
        author,
        genre,
        publisher,
        publication_year,
        description,
        language,
        cover_image_url,
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to create book" });
  }
};

// Get all books
const getBooks = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM books");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

// Get a single book by ID
const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM books WHERE book_id = $1", [
      id,
    ]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch book" });
  }
};

// Update a book
const updateBook = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    author,
    genre,
    publisher,
    publication_year,
    description,
    language,
    cover_image_url,
  } = req.body;
  try {
    const result = await pool.query(
      "UPDATE books SET title = $1, author = $2, genre = $3, publisher = $4, publication_year = $5, description = $6, language = $7, cover_image_url = $8 WHERE book_id = $9 RETURNING *",
      [
        title,
        author,
        genre,
        publisher,
        publication_year,
        description,
        language,
        cover_image_url,
        id,
      ]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to update book" });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM books WHERE book_id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to delete book" });
  }
};

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
};
