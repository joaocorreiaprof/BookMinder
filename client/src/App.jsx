import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Books from "./components/Books";
import Genres from "./components/Genres";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/books" element={<Books />} />
        <Route path="/genres" element={<Genres />} />
      </Routes>
    </Router>
  );
}

export default App;
