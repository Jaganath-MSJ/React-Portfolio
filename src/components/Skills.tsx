import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import Data from "../data/data.json";

function Skills() {
  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <Section id="Skills">
      <h1>
        <FontAwesomeIcon icon={faLaptopCode} /> Skills
      </h1>
      <div>
        {Data.Skills.map((skill, index) => (
          <motion.article
            key={skill.label}
            className="skill"
            variants={itemVariantsLeft}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <div>
              <img src={skill.img} draggable="false" alt={skill.label} />
            </div>
            <h2>{skill.label}</h2>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 3rem 10%;
  height: auto;
  background-color: var(--background-color2);
  color: var(--text-color2);
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
