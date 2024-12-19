import { useEffect, useState } from "react";
import api from "../components/api";
import { useNavigate } from "react-router-dom";

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/api/authors")
      .then((response) => {
        setAuthors(response.data);
      })
      .catch((error) => console.error("Error fetching authors:", error));
  }, []);

  const handleGenreClick = (authorId) => {
    navigate(`/books?author=${authorId}`);
  };

  return (
    <div>
      <h2>Authors List:</h2>
      {authors.length > 0 ? (
        <ul>
          {authors.map((author) => (
            <li key={author.author_id}>
              <button onClick={() => handleGenreClick(author.author_id)}>
                {author.name}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No genres available</p>
      )}
    </div>
  );
};

export default Authors;
