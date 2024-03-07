import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import "./index.css";
import Features from "./components/Features";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Footer />
    </Router>
  );
};

export default App;
