import React, { useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { ISourceOptions, Engine } from "tsparticles-engine";
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import Projects from "./pages/Projects";
import Page404 from "./pages/Page404";
import particlesConfig from "./data/particles.config.json";

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  const particlesOptions: ISourceOptions = particlesConfig;

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
