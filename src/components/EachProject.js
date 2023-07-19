import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function EachProject({project}) {
    return (
        <div>
            <img src={project.img} alt={project.label} />
            <div class="projectContent">
                <h2>{project.label}</h2>
                <a href={project.view} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEye} /> View</a>
                <a href={project.code} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode} /> Code</a>
            </div>
        </div>
    )
}

export default EachProject;