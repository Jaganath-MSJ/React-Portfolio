import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";
import LinkedIn from "../icons/brand_logo/LinkedIn";
import Github from "../icons/brand_logo/Github";
import EmailIcon from "../icons/EmailIcon";
import Telegram from "../icons/brand_logo/Telegram";
import Data from "../data/data.json";
import { NAVIGATION_STRING } from "../data/Navigation.constant";

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
    <Section id={NAVIGATION_STRING[0].LABEL}>
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
          <span>I am a&nbsp;</span>
          <TypeAnimation
            className="changeText"
            sequence={Data.roles.flatMap((r) => [r, 1000])}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{
              display: "inline-block",
              background:
                "linear-gradient(to left bottom, blue, var(--hover-color1))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          />
        </motion.h2>
        <address className="connectMe">
          <a href={Data.linkedInLink} target="_blank" rel="noreferrer">
            <LinkedIn />
          </a>
          <a href={Data.githubLink} target="_blank" rel="noreferrer">
            <Github />
          </a>
          <a href={`mailto:${Data.email}`} target="_blank" rel="noreferrer">
            <EmailIcon />
          </a>
          <a href={Data.telegramLink} target="_blank" rel="noreferrer">
            <Telegram />
          </a>
        </address>
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
      background: linear-gradient(
        to right bottom,
        var(--hover-color2),
        var(--hover-color1)
      );
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
        fill: white;
        stroke: white;
        &:hover {
          background: transparent;
          fill: var(--hover-color2);
          stroke: var(--hover-color2);
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
