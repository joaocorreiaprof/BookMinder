const pool = require("../db/db");

// Create a new author
const createAuthor = async (req, res) => {
  const { name, bio, birthdate } = req.body;

  // Input validation
  if (!name || !bio || !birthdate) {
    return res
      .status(400)
      .json({ error: "Name, bio, and birthdate are required" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO authors (name, bio, birthdate) VALUES ($1, $2, $3) RETURNING *",
      [name, bio, birthdate]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to create author" });
  }
};

// Get all authors
const getAuthors = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM authors");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch authors" });
  }
};

// Get a single author by ID
const getAuthorID = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "SELECT * FROM authors WHERE author_id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Author not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch author" });
  }
};

// Update an author
const updateAuthor = async (req, res) => {
  const { id } = req.params;
  const { name, bio, birthdate } = req.body;

  // Input validation
  if (!name || !bio || !birthdate) {
    return res
      .status(400)
      .json({ error: "Name, bio, and birthdate are required" });
  }

  try {
    const result = await pool.query(
      "UPDATE authors SET name = $1, bio = $2, birthdate = $3 WHERE author_id = $4 RETURNING *",
      [name, bio, birthdate, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Author not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to update author" });
  }
};

// Delete an author
const deleteAuthor = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM authors WHERE author_id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Author not found" });
    }

    res.status(200).json({ message: "Author deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to delete author" });
  }
};

module.exports = {
  createAuthor,
  getAuthors,
  getAuthorID,
  updateAuthor,
  deleteAuthor,
};
