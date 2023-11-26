import React, { Fragment } from "react";
import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Projects from "./Projects";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

function MainPage() {
  return (
    <Fragment>
      <Home />
      <AboutMe />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </Fragment>
  );
}

export default MainPage;
