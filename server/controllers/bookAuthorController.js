const pool = require("../db/db");

// Associate a book with an author
const addBookAuthor = async (req, res) => {
  const { book_id, author_id } = req.body;

  // Validate input
  if (!book_id || !author_id) {
    return res
      .status(400)
      .json({ error: "Both book_id and author_id are required." });
  }

  try {
    const result = await pool.query(
      "INSERT INTO book_authors (book_id, author_id) VALUES ($1, $2) RETURNING *",
      [book_id, author_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error associating book with author:", err);
    res.status(500).json({ error: "Failed to associate book with author" });
  }
};

// Get all books with their authors
const getBooksWithAuthors = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT b.book_id, b.title, a.author_id, a.name AS author_name
      FROM books b
      JOIN book_authors ba ON b.book_id = ba.book_id
      JOIN authors a ON ba.author_id = a.author_id
      ORDER BY b.title ASC
    `);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching books with authors:", err);
    res.status(500).json({ error: "Failed to fetch books with authors" });
  }
};

// Get all authors of a specific book
const getAuthorsByBook = async (req, res) => {
  const { book_id } = req.params;

  try {
    const result = await pool.query(
      `
      SELECT a.author_id, a.name AS author_name
      FROM authors a
      JOIN book_authors ba ON a.author_id = ba.author_id
      WHERE ba.book_id = $1
    `,
      [book_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "No authors found for this book." });
    }

    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching authors by book:", err);
    res.status(500).json({ error: "Failed to fetch authors for the book" });
  }
};

// Get all books by a specific author
const getBooksByAuthor = async (req, res) => {
  const { author_id } = req.params;

  try {
    const result = await pool.query(
      `
      SELECT b.book_id, b.title
      FROM books b
      JOIN book_authors ba ON b.book_id = ba.book_id
      WHERE ba.author_id = $1
    `,
      [author_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "No books found for this author." });
    }

    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching books by author:", err);
    res.status(500).json({ error: "Failed to fetch books for the author" });
  }
};

// Remove a book-author association
const removeBookAuthor = async (req, res) => {
  const { book_id, author_id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM book_authors WHERE book_id = $1 AND author_id = $2 RETURNING *",
      [book_id, author_id]
    );

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ error: "Book-author association not found." });
    }

    res
      .status(200)
      .json({ message: "Book-author association removed successfully." });
  } catch (err) {
    console.error("Error removing book-author association:", err);
    res.status(500).json({ error: "Failed to remove book-author association" });
  }
};

module.exports = {
  addBookAuthor,
  getBooksWithAuthors,
  getAuthorsByBook,
  getBooksByAuthor,
  removeBookAuthor,
};
