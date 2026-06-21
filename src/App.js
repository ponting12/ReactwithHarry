import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<TextForm heading="Enter the text to analyze below:" />}
          />

          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;