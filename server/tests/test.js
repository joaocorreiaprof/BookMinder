const pool = require("../db/db"); // Corrected import path

// Function to test the database connection and run a query
const testQuery = async () => {
  try {
    // Query to select all books with author and genre information
    const res = await pool.query(`
            SELECT 
                books.title AS book_title, 
                books.price, 
                books.stock, 
                authors.name AS author_name, 
                genres.name AS genre_name
            FROM books
            JOIN authors ON books.author_id = authors.id
            JOIN genres ON books.genre_id = genres.id;
        `);

    // Log the result to the console
    console.log("Books:", res.rows);
  } catch (err) {
    console.error("Error executing query:", err);
  } finally {
    pool.end(); // Close the pool after the query is executed
  }
};

testQuery();
