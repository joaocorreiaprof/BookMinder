const path = require("path");
const pool = require("../db/db");

const imageFolder = path.join(__dirname, "client/src/images/books");

// List of books to update
const booksWithImages = [
  {
    book_id: 2,
    image_path: path.join(
      imageFolder,
      "Harry Potter and the Chamber of Secrets.jpg"
    ),
  },
];

const updateImagePaths = async () => {
  try {
    for (const book of booksWithImages) {
      const { book_id, image_path } = book;

      const relativePath = path.relative(__dirname, image_path);

      await pool.query(
        "UPDATE books SET cover_image_url = $1 WHERE book_id = $2",
        [relativePath, book_id]
      );
      console.log(`Updated book_id ${book_id} with image_path ${relativePath}`);
    }
    console.log("All image paths updated successfully!");
  } catch (err) {
    console.error("Error updating image paths:", err.message);
  } finally {
    pool.end();
  }
};

// Run the script
updateImagePaths();
