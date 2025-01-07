import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../components/api";
import "../styles/book.css";

const Book = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [quantity, setQuantity] = useState(null);

  useEffect(() => {
    // Fetch book details
    api
      .get(`/api/books/${bookId}`)
      .then((response) => {
        console.log("Book details:", response.data);
        setBook(response.data);
      })
      .catch((error) => console.error("Error fetching book details:", error));

    // Fetch book inventory
    api
      .get("/api/books-inventory")
      .then((response) => {
        const bookInventory = response.data.find(
          (item) => item.book_id === parseInt(bookId)
        );
        setQuantity(bookInventory ? bookInventory.quantity : "N/A");
      })
      .catch((error) => console.error("Error fetching book inventory:", error));
  }, [bookId]);

  const handleEditClick = () => {
    alert("You need permissions to edit this book.");
  };

  return (
    <div>
      {book ? (
        <>
          <div className="book-details">
            <h2>{book.title}</h2>
            <p>
              <strong>Publisher:</strong> {book.publisher}
            </p>
            <p>
              <strong>Publication Year:</strong> {book.publication_year}
            </p>
            <p>
              <strong>Language:</strong> {book.language}
            </p>
            <p>
              <strong>Description:</strong> {book.description}
            </p>
            <p>
              <strong>Quantity:</strong> {quantity}
            </p>
            <button className="edit-button" onClick={handleEditClick}>
              Edit
            </button>
          </div>
        </>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
};

export default Book;
