const express = require("express");
const router = express.Router();
const {
  createInventory,
  getInventory,
  getInventoryByID,
  updateInventory,
  deleteInventory,
  getBooksInventory,
} = require("../controllers/inventoryController");

// Create a new inventory entry
router.post("/inventory", createInventory);

// Get all inventory entries
router.get("/inventory", getInventory);

// Get inventory for books (this is the new route)
router.get("/books-inventory", getBooksInventory);

// Get a specific inventory entry by ID
router.get("/inventory/:id", getInventoryByID);

// Update an inventory entry
router.put("/inventory/:id", updateInventory);

// Delete an inventory entry
router.delete("/inventory/:id", deleteInventory);

module.exports = router;
