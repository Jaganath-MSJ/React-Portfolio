import React from "react";

function EachEducation(props) {
    return (
        <div>
            <h2>{props.degree}</h2>
            <h4>{props.college}</h4>
            <h3>{props.year} | {props.isCompleted}</h3>
        </div>
    )
}

export default EachEducation;