import { Link } from "react-router-dom";
import "../styles/home.css";
import BookImage from "../images/book-container-image.jpg";
import rowling from "../images/home-images/j.k.rowling.jpg";
import george from "../images/home-images/george rr martin.jpg";
import stephen from "../images/home-images/stephen king.jpg";
import harry from "../images/home-images/harry.jpg";
import game from "../images/home-images/game.jpg";
import shining from "../images/home-images/shining.jpg";
import fantasy from "../images/home-images/fantasy.png";
import triller from "../images/home-images/thiller.jpg";
import science from "../images/home-images/science.png";

const Home = () => {
  return (
    <div className="home-main-div">
      <div className="first-description-container">
        <div className="description-pic-container">
          <div className="home-description">
            <p className="home-description-text">
              BookMinder is your ultimate inventory management solution for
              organizing and tracking books with ease. Whether you are managing
              a personal collection, a small bookstore, or a library, BookMinder
              helps you keep everything in order. Add, update, and search for
              books effortlessly. Simple, efficient, and built with book lovers
              in mind—BookMinder is here to make inventory a breeze.
            </p>
          </div>
          <img
            src={BookImage}
            alt="Book Inventory"
            className="home-book-description"
          />
        </div>
        <div className="quote-description">
          <p>This is where the magic happens</p>
        </div>
      </div>
      <div className="home-categories">
        <section className="home-category-authors">
          <h1 className="home-categories-title">Find the best authors here</h1>
          <div className="home-category-authors-images">
            <img
              src={rowling}
              alt="Portrait of J.K. Rowling"
              className="home-pictures"
            />
            <img
              src={george}
              alt="Portrait of George R.R. Martin"
              className="home-pictures"
            />
            <img
              src={stephen}
              alt="Portrait of Stephen King"
              className="home-pictures"
            />
          </div>
          <div className="home-category-authors-description">
            <p>
              Dive into our curated selection of books by some of the most
              iconic authors! From the magical worlds of{" "}
              <strong>J.K. Rowling</strong> to the epic fantasies of
              <strong> George R.R. Martin</strong> and the thrilling tales of
              suspense and horror by <strong>Stephen King</strong>. Discover the
              perfect book for your next literary adventure.
            </p>
          </div>
          <button aria-label="View all authors">
            <Link to="/authors">View all authors</Link>
          </button>
        </section>

        <section className="home-category-books">
          <h1 className="home-categories-title">The best books</h1>
          <div className="home-category-books-images">
            <img
              src={harry}
              alt="Harry Potter book cover"
              className="home-pictures"
            />
            <img
              src={game}
              alt="Game of Thrones book cover"
              className="home-pictures"
            />
            <img
              src={shining}
              alt="The Shining book cover"
              className="home-pictures"
            />
          </div>
          <div className="home-category-books-description">
            <p>
              Discover some of the most iconic books! From the magical worlds of{" "}
              <strong>J.K. Rowling</strong> to the epic fantasies of{" "}
              <strong>George R.R. Martin</strong> and the thrilling tales of
              suspense and horror by <strong>Stephen King</strong>.
            </p>
          </div>
          <button aria-label="View all books">
            <Link to="/books">View all books</Link>
          </button>
        </section>

        <section className="home-category-genres">
          <h1 className="home-categories-title">And the best genres</h1>
          <div className="home-category-genres-images">
            <img
              src={science}
              alt="Science genre image"
              className="home-pictures"
            />
            <img
              src={fantasy}
              alt="Fantasy genre image"
              className="home-pictures"
            />
            <img
              src={triller}
              alt="Thriller genre image"
              className="home-pictures"
            />
          </div>
          <div className="home-category-genres-description">
            <p>
              Explore the best genres from the world of books. Whether you are
              into the intellectual stimulation of <strong>Science</strong>, the
              captivating worlds of <strong>Fantasy</strong>, or the
              edge-of-your-seat thrills of <strong>Thriller</strong> genres.
            </p>
          </div>
          <button aria-label="View all genres">
            <Link to="/genres">View all genres</Link>
          </button>
        </section>
      </div>
    </div>
  );
};

export default Home;
