import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
