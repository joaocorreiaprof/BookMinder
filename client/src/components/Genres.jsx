import { useEffect, useState } from "react";
import api from "../components/api";
import { useNavigate } from "react-router-dom";

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/api/genres")
      .then((response) => {
        setGenres(response.data);
      })
      .catch((error) => console.error("Error fetching genres:", error));
  }, []);

  const handleGenreClick = (genreId) => {
    navigate(`/books?genre=${genreId}`);
  };

  return (
    <div>
      <h2>Genres List:</h2>
      {genres.length > 0 ? (
        <ul>
          {genres.map((genre) => (
            <li key={genre.genre_id}>
              <button onClick={() => handleGenreClick(genre.genre_id)}>
                {genre.name}
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

export default Genres;
