// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./General/Header.jsx";
import Hero from "./Homepage/HeroSection.jsx";
import AboutMe from "./Homepage/AboutMe.jsx";
import Services from "./Homepage/Services.jsx";
import VideoCarousel from "./Homepage/SampleWork.jsx";
import ContactCTA from "./Homepage/ContactCTA.jsx";
import Footer from "./General/Footer.jsx";
import CompleteService from "./Components/CompleteService.jsx";

const Home = () => (
  <>
    <Header />
    <Hero />
    <AboutMe />
    <Services />
    <VideoCarousel />
    <ContactCTA />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="scroll-smooth min-h-screen bg-[var(--light-background-color)] dark:bg-[var(--primary-color)] text-[var(--dark-text-color)] dark:text-white transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<CompleteService />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
