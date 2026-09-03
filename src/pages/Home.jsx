import { useState } from "react";
import Projects from "../components/Projects";
import BackToTop from "../components/BackToTop";
import Hero from "../components/Hero";
import Terminal from "../components/Terminal";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import MiniGame from "../components/MiniGame";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import About from "../components/About";
import Footer from "../components/Footer";





function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Terminal />
        <Contact />
        <MiniGame />
      </main>

      <Footer />
       <BackToTop />
    </div>
  );
}

export default Home;