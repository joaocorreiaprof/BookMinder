import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Books from "./components/Books";
import Genres from "./components/Genres";
import Authors from "./components/Authors";
import Footer from "./components/Footer";
import Book from "./components/Book";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/books" element={<Books />} />
            <Route path="/genres" element={<Genres />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/book/:bookId" element={<Book />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
