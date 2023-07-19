import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function EachProject(props) {
    return (
        <div>
            <img src={props.img} alt={props.label} />
            <div class="projectContent">
                <h2>{props.label}</h2>
                <a href={props.view} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEye} /> View</a>
                <a href={props.code} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode} /> Code</a>
            </div>
        </div>
    )
}

export default EachProject;