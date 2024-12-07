import { useState } from "react";
import Navabar from "./components/Navabar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import SkillsDetails from "./components/SkillsDetails";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Loader />
      <Navabar />
      <Hero />
      <Cards />
      <SkillsDetails />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
