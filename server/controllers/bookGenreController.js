const pool = require("../db/db");

// Associate a book with a genre
const addBookGenre = async (req, res) => {
  const { book_id, genre_id } = req.body;

  // Validate input
  if (!book_id || !genre_id) {
    return res
      .status(400)
      .json({ error: "Both book_id and genre_id are required." });
  }

  try {
    const result = await pool.query(
      "INSERT INTO book_genres (book_id, genre_id) VALUES ($1, $2) RETURNING *",
      [book_id, genre_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error associating book with genre:", err);
    res.status(500).json({ error: "Failed to associate book with genre" });
  }
};

// Get all books with their genres
const getBooksWithGenres = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT b.book_id, b.title, g.genre_id, g.name AS genre_name
      FROM books b
      JOIN book_genres bg ON b.book_id = bg.book_id
      JOIN genres g ON bg.genre_id = g.genre_id
      ORDER BY b.title ASC
    `);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching books with genres:", err);
    res.status(500).json({ error: "Failed to fetch books with genres" });
  }
};

// Get all genres for a specific book
const getGenresByBook = async (req, res) => {
  const { book_id } = req.params;

  try {
    const result = await pool.query(
      `
      SELECT g.genre_id, g.name AS genre_name
      FROM genres g
      JOIN book_genres bg ON g.genre_id = bg.genre_id
      WHERE bg.book_id = $1
    `,
      [book_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "No genres found for this book." });
    }

    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching genres by book:", err);
    res.status(500).json({ error: "Failed to fetch genres for the book" });
  }
};

// Get all books in a specific genre
const getBooksByGenre = async (req, res) => {
  const { genre_id } = req.params;

  try {
    const result = await pool.query(
      `
      SELECT b.book_id, b.title
      FROM books b
      JOIN book_genres bg ON b.book_id = bg.book_id
      WHERE bg.genre_id = $1
    `,
      [genre_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "No books found for this genre." });
    }

    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching books by genre:", err);
    res.status(500).json({ error: "Failed to fetch books for the genre" });
  }
};

// Remove a book-genre association
const removeBookGenre = async (req, res) => {
  const { book_id, genre_id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM book_genres WHERE book_id = $1 AND genre_id = $2 RETURNING *",
      [book_id, genre_id]
    );

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ error: "Book-genre association not found." });
    }

    res
      .status(200)
      .json({ message: "Book-genre association removed successfully." });
  } catch (err) {
    console.error("Error removing book-genre association:", err);
    res.status(500).json({ error: "Failed to remove book-genre association" });
  }
};

module.exports = {
  addBookGenre,
  getBooksWithGenres,
  getGenresByBook,
  getBooksByGenre,
  removeBookGenre,
};
