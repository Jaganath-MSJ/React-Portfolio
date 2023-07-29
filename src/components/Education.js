import React from "react";
import { Data } from "../Data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import "./style/Education.css";

function Education() {
  return (
    <section className="education" id="Education">
      <h1>
        <FontAwesomeIcon icon={faGraduationCap} /> Education
      </h1>
      <div>
        {Data.Education.map((education) => {
          return (
            <div key={education.degree}>
              <h2>{education.degree}</h2>
              <h4>{education.college}</h4>
              <h3>
                {education.year} | {education.isCompleted}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;
