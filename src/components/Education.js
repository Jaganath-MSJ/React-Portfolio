import React from "react";
import { Data } from "../Data/data";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function Education() {
  return (
    <Section id="Education">
      <h1>
        <FontAwesomeIcon icon={faGraduationCap} /> Education
      </h1>
      <div>
        {Data.Education.map((education) => {
          return (
            <div key={education.degree} className="education">
              <h2>{education.degree}</h2>
              <h4>{education.college}</h4>
              <h3>
                {education.year} | {education.isCompleted}
              </h3>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 3rem 10%;
  height: auto;
  background-color: #f7f7f7;
  & > h1 {
    text-align: center;
    font-size: 3rem;
  }
  & > div {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 1rem;
    .education {
      background-color: white;
      border-radius: 1rem;
      box-shadow: 10px 10px 10px lightgray;
      padding: 0.5rem 1rem;
      transition: 0.3s ease-in-out;
      & > h2 {
        color: rgb(24, 35, 133);
      }
      & > h3 {
        color: green;
      }
      &:hover {
        box-shadow: 10px 10px 10px rgb(168, 167, 167);
      }
    }
  }
`;

export default Education;
