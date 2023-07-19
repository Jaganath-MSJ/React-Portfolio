import React, { Component } from "react";

import EachProject from "./EachProject";
import { Data } from "../Data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";

import "./style/Projects.css";

class Projects extends Component {
  render() {
    return (
      <section class="projects" id="Projects">
        <h1>
          <FontAwesomeIcon icon={faDiagramProject} /> Projects
        </h1>
        <div>
          {Data.Projects.map((project) => {
            return <EachProject project={project} />;
          })}
        </div>
      </section>
    );
  }
}

export default Projects;
