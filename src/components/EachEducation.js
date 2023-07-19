import React from "react";

function EachEducation({education}) {
    return (
        <div>
            <h2>{education.degree}</h2>
            <h4>{education.college}</h4>
            <h3>{education.year} | {education.isCompleted}</h3>
        </div>
    )
}

export default EachEducation;