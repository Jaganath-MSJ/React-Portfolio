import React from "react";
import styled from "styled-components";
import { Data } from "../Data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

function Skills() {
  return (
    <Section id="Skills">
      <h1>
        <FontAwesomeIcon icon={faLaptopCode} /> Skills
      </h1>
      <div>
        {Data.Skills.map((skill) => {
          return (
            <div key={skill.label} className="skill">
              <div>
                <img src={skill.img} draggable="false" alt={skill.label} />
              </div>
              <h2>{skill.label}</h2>
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
  background-color: rgb(43, 61, 218);
  color: #f7f7f7;
  & > h1 {
    text-align: center;
    font-size: 3rem;
  }
  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: rgb(24, 35, 133);
    border-radius: 1rem;
    padding: 1rem;
    .skill {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      align-items: center;
      background-color: black;
      border-radius: 1rem;
      width: 10rem;
      height: 10rem;
      transition: 0.3s ease-in-out;
      & > div {
        height: 50%;
        & > img {
          display: block;
          margin: auto;
          width: 4rem;
          height: 4rem;
        }
      }
      & > h2 {
        font-size: 1.4rem;
      }
      &:hover {
        box-shadow: 5px 5px 10px rgb(11, 1, 75);
      }
    }
  }
  @media only screen and (max-width: 500px) {
    padding: 3rem 5%;
    & > div > .skill {
      width: 8rem;
      height: 8rem;
      & > h2 {
        font-size: 1.1rem;
      }
    }
  }
`;

export default Skills;
