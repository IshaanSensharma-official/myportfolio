import React from "react";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";

const App = () => {
  return (
    <div className="bg-[#050414] min-h-screen text-white overflow-x-hidden relative">

      <Navbar />

      <BlurBlob
        position={{ top: "30%", left: "20%" }}
        size={{ width: "500px", height: "500px" }}
      />

      <main className="pt-28">

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