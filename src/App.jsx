import React from "react";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MeteorBackground from "./components/MeteorBackground";

const App = () => {
  return (
    <div
      className="min-h-screen text-white overflow-x-hidden relative"
      style={{ backgroundColor: "#050414" }}
    >
      {/* Meteor shower background */}
      <MeteorBackground />

      <Navbar />

      <main className="pt-28 relative" style={{ zIndex: 1 }}>
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;