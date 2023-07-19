import React, { Component } from "react";

import EachSkill from "./EachSkill";
import { Data } from "../Data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

import "./style/Skills.css";

class Skills extends Component {
  render() {
    return (
      <section class="skills" id="Skills">
        <h1>
          <FontAwesomeIcon icon={faLaptopCode} /> Skills
        </h1>
        <div>
          {Data.Skills.map((skill) => {
            return <EachSkill skill={skill} />;
          })}
        </div>
      </section>
    );
  }
}

export default Skills;
