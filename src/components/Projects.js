import React from "react";
import { Data } from "../Data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import "./style/Projects.css";

function Projects() {
  return (
    <section className="projects" id="Projects">
      <h1>
        <FontAwesomeIcon icon={faDiagramProject} /> Projects
      </h1>
      <div>
        {Data.Projects.map((project) => {
          return (
            <div key={project.label}>
              <img src={project.img} alt={project.label} />
              <div className="projectContent">
                <h2>{project.label}</h2>
                <a href={project.view} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faEye} /> View
                </a>
                <a href={project.code} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faCode} /> Code
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
