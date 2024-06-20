import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Music from "./pages/Music";
import Tours from "./pages/Tours";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/about" component={About} />
          <Route path="/music" component={Music} />
          <Route path="/tours" component={Tours} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
