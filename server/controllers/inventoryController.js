const pool = require("../db/db");

// Create a new inventory item
const createInventory = async (req, res) => {
  const { name, description, quantity, price } = req.body;

  // Validate input
  if (!name || !quantity || !price) {
    return res.status(400).json({
      error: "Name, quantity, and price are required fields.",
    });
  }

  try {
    const result = await pool.query(
      "INSERT INTO inventory (name, description, quantity, price) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, description, quantity, price]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error creating inventory item:", err);
    res.status(500).json({ error: "Failed to create inventory item" });
  }
};

// Get all inventory items
const getInventory = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM inventory ORDER BY name ASC"
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching inventory items:", err);
    res.status(500).json({ error: "Failed to fetch inventory items" });
  }
};

// Get a single inventory item by ID
const getInventoryByID = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "SELECT * FROM inventory WHERE inventory_id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Inventory item not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching inventory item:", err);
    res.status(500).json({ error: "Failed to fetch inventory item" });
  }
};

// Update an inventory item
const updateInventory = async (req, res) => {
  const { id } = req.params;
  const { name, description, quantity, price } = req.body;

  // Validate input
  if (!name || !quantity || !price) {
    return res.status(400).json({
      error: "Name, quantity, and price are required fields.",
    });
  }

  try {
    const result = await pool.query(
      "UPDATE inventory SET name = $1, description = $2, quantity = $3, price = $4 WHERE inventory_id = $5 RETURNING *",
      [name, description, quantity, price, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Inventory item not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Error updating inventory item:", err);
    res.status(500).json({ error: "Failed to update inventory item" });
  }
};

// Delete an inventory item
const deleteInventory = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM inventory WHERE inventory_id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Inventory item not found" });
    }

    res.status(200).json({ message: "Inventory item deleted successfully" });
  } catch (err) {
    console.error("Error deleting inventory item:", err);
    res.status(500).json({ error: "Failed to delete inventory item" });
  }
};

module.exports = {
  createInventory,
  getInventory,
  getInventoryByID,
  updateInventory,
  deleteInventory,
};
