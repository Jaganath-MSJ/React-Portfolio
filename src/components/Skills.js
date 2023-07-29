import React from "react";
import { Data } from "../Data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

import "./style/Skills.css";

function Skills() {
  return (
    <section className="skills" id="Skills">
      <h1>
        <FontAwesomeIcon icon={faLaptopCode} /> Skills
      </h1>
      <div>
        {Data.Skills.map((skill) => {
          return (
            <div key={skill.label}>
              <div>
                <img src={skill.img} alt={skill.label} />
              </div>
              <h2>{skill.label}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
