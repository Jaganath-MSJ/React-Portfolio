import React, {Component} from "react";

import EachProject from "./EachProject";
import { projectsLists } from "./ProjectsLIst";
import { isArrayEmpty } from "./Utlis";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';

import './style/Projects.css';

class Projects extends Component {
    projectsList = projectsLists

    render() {
        const projects = isArrayEmpty(this.projectsList) ? [] : this.projectsList.map((item) => {
            return (
                <EachProject label={item.label} img={item.img} view={item.view} code={item.code} />
            )
        })
        return (
            <section class="projects" id="Projects">
                <h1><FontAwesomeIcon icon={faDiagramProject}/> Projects</h1>
                <div>
                    {projects}
                </div>
            </section>
        )
    }
}

export default Projects;