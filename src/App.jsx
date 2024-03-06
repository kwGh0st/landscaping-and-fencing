import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <About />
      <Routes>
        <Route />
      </Routes>
    </Router>
  );
};

export default App;
