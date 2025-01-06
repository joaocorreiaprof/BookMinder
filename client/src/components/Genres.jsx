import { useEffect, useState } from "react";
import api from "../components/api";
import { useNavigate } from "react-router-dom";
import "../styles/genres.css";

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
    <div className="genres-page">
      <h2 className="page-title">Genres List:</h2>
      {genres.length > 0 ? (
        <div className="genres-container">
          {genres.map((genre) => (
            <div
              key={genre.genre_id}
              className="genre-card"
              onClick={() => handleGenreClick(genre.genre_id)}
              style={{
                backgroundImage: `url(${genre.image_url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="card-front">
                <h3>{genre.name}</h3>
              </div>
              <div className="card-back">
                <p>{genre.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No genres available</p>
      )}
    </div>
  );
};

export default Genres;
