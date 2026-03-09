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
    <div className="bg-[#050414] min-h-screen text-white relative overflow-x-hidden">

      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <BlurBlob
          position={{ top: "30%", left: "20%" }}
          size={{ width: "500px", height: "500px" }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <Navbar />

      <main className="relative pt-28 space-y-32">

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