import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";
import Data from "../Data/data.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  const itemVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 },
  };
  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };
  return (
    <Section id="Home">
      <div>
        <h3>Hey! I am</h3>
        <motion.h1
          variants={itemVariantsLeft}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 1 }}
        >
          {Data.nameInc}
        </motion.h1>
        <motion.h2
          variants={itemVariantsRight}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 1 }}
        >
          <span>I am&nbsp;</span>
          <TypeAnimation
            className="changeText"
            sequence={Data.roles.flatMap((r) => [r, 1000])}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{
              display: "inline-block",
              background: "linear-gradient(to left bottom, blue, dodgerblue)",
              webkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          />
        </motion.h2>
        <div className="connectMe">
          <a href={Data.linkedInLink} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href={Data.githubLink} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href={`mailto: + ${Data.email}`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href={Data.telegramLink} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    text-align: center;
    & > h3 {
      font-size: 1.3rem;
    }
    & > h1 {
      font-size: 3.5rem;
      background: linear-gradient(to right bottom, blueviolet, dodgerblue);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    & > h2 {
      & > span {
        font-size: 2rem;
      }
      .changeText {
        font-size: 3rem;
      }
    }
    .connectMe {
      display: flex;
      justify-content: center;
      gap: 1rem;
      & > a {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        width: 2.5rem;
        height: 2.5rem;
        color: white;
        background-color: black;
        border: 1px solid black;
        border-radius: 1.5rem;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: transparent;
          color: blueviolet;
        }
      }
    }
    @media only screen and (max-width: 400px) {
      & > h1 {
        font-size: 3rem;
      }
      & > h2 {
        & > span {
          font-size: 1.2rem;
        }
        .changeText {
          font-size: 2rem;
        }
      }
    }
  }
`;

export default Home;
