import { useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from "./Data/particles.config.json";
import Navigation from "./Components/Navigation.js";
import Home from "./Components/Home.js";
import AboutMe from "./Components/AboutMe.js";
import Skills from "./Components/Skills.js";
import Education from "./Components/Education.js";
import Projects from "./Components/Projects.js";
import Contact from "./Components/Contact.js";
import Footer from "./Components/Footer.js";

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
      />
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <AboutMe />
              <Skills />
              <Education />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
