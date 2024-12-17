const pool = require("../db/db");

// Create new genre
const createGenre = async (req, res) => {
  const { name } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO genres (name) VALUES ($1) RETURNING *",
      [name]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error creating genre:", err);
    res.status(500).json({ error: "Failed to create genre" });
  }
};

// Get all genres
const getGenres = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM genres");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching genres:", err);
    res.status(500).json({ error: "Failed to fetch genres" });
  }
};

// Get a single genre by ID
const getGenreID = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM genres WHERE genre_id = $1",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Genre not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching genre:", err);
    res.status(500).json({ error: "Failed to fetch genre" });
  }
};

// Update genre
const updateGenre = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const result = await pool.query(
      "UPDATE genres SET name = $1 WHERE genre_id = $2 RETURNING *",
      [name, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Genre not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Error updating genre:", err);
    res.status(500).json({ error: "Failed to update genre" });
  }
};

// Delete a genre
const deleteGenre = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM genres WHERE genre_id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Genre not found" });
    }
    res.status(200).json({ message: "Genre deleted successfully" });
  } catch (err) {
    console.error("Error deleting genre:", err);
    res.status(500).json({ error: "Failed to delete genre" });
  }
};

module.exports = {
  createGenre,
  getGenres,
  getGenreID,
  updateGenre,
  deleteGenre,
};
