import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Data from "../data/data.json";
import { NAVIGATION_STRING } from "../data/Navigation.constant";

function Experience() {
  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <Section id={NAVIGATION_STRING[4].LABEL}>
      <h1>
        {NAVIGATION_STRING[4].ICON}
        &nbsp;{NAVIGATION_STRING[4].LABEL}
      </h1>
      <div>
        {Data.Experience.map((experience, index) => (
          <motion.article
            key={`${experience.companyName} | ${experience.role}`}
            className="experience"
            variants={itemVariantsLeft}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <h2>{`${experience.role}${
              experience.isIntership ? " | Intership" : ""
            }`}</h2>
            <h3>{experience.companyName}</h3>
            <h4>{`${experience.fromMonthAndYear} | ${
              experience.toMonthAndYear ?? "Present"
            }`}</h4>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 3rem 10%;
  height: auto;
  background-color: var(--background-color1);
  & > h1 {
    text-align: center;
    font-size: 3rem;
  }
  & > div {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 1rem;
    .experience {
      background-color: white;
      border-radius: 1rem;
      box-shadow: 10px 10px 10px lightgray;
      padding: 0.5rem 1rem;
      transition: 0.3s ease-in-out;
      & > h2 {
        color: var(--background-color2);
      }
      & > h4 {
        color: green;
      }
      &:hover {
        box-shadow: 10px 10px 10px rgb(168, 167, 167);
      }
      @media only screen and (max-width: 400px) {
        & > h2 {
          font-size: 1.3rem;
        }
      }
    }
  }
`;

export default Experience;
