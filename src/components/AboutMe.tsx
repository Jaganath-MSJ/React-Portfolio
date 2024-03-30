import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import styled from "styled-components";
import AngleRight from "../icons/AngleRight";
import Data from "../data/data.json";
import { NAVIGATION_STRING } from "../data/Navigation.constant";

function AboutMe() {
  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };
  const itemVariantsRight = {
    hidden: { opacity: 0, x: 200 },
    show: { opacity: 1, x: 0 },
  };

  const tiltRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    VanillaTilt.init(tiltRef.current!, {
      max: 10,
      speed: 400,
      glare: false,
    });
  }, []);

  return (
    <Section id={NAVIGATION_STRING[1].LABEL}>
      <h1>
        {NAVIGATION_STRING[1].ICON}
        &nbsp;{NAVIGATION_STRING[1].LABEL}
      </h1>
      <div>
        <motion.div
          className="aboutmeImg"
          ref={tiltRef}
          variants={itemVariantsLeft}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 1 }}
        >
          <img src={Data.img} draggable="false" alt={Data.nameInc} />
        </motion.div>
        <motion.div
          className="aboutmeDetails"
          variants={itemVariantsRight}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 1 }}
        >
          <h2>I'm {Data.name}</h2>
          <h3>{Data.role}</h3>
          <h4>{Data.currently}</h4>
          <h4>{Data.experience}</h4>
          <h4>{Data.projects}</h4>
          <a href={Data.resume} target="_blank" rel="noreferrer">
            Resume&nbsp;
            <AngleRight />
          </a>
        </motion.div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 3rem 5%;
  padding-bottom: 6.3rem;
  height: auto;
  background-color: var(--background-color1);
  & > h1 {
    text-align: center;
    font-size: 3rem;
  }
  & > div {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 10%;
    .aboutmeImg > img {
      margin: auto;
      width: 24rem;
      height: 26rem;
      border-radius: 1rem;
      box-shadow: 10px 10px 10px lightgray;
      filter: grayscale(100%);
      transition: 0.3s ease-in-out;
      &:hover {
        filter: none;
        box-shadow: 10px 10px 10px rgb(168, 167, 167);
      }
    }
    .aboutmeDetails {
      & > h2 {
        font-weight: bolder;
        font-size: 1.8rem;
      }
      & > h3 {
        font-size: 1.3rem;
      }
      & > h4 {
        text-align: justify;
        display: flex;
        flex-wrap: wrap;
        font-size: 1.2rem;
        font-weight: 500;
      }
      & > a {
        padding: 1rem 2rem;
        background-color: var(--hover-color1);
        color: white;
        stroke: white;
        border-radius: 15px;
        font-size: 1.2rem;
        transition: 0.3s ease-in-out;
        display: flex;
        align-items: center;
        width: max-content;
        &:hover {
          color: black;
          stroke: black;
          box-shadow: 5px 5px 5px rgba(81, 81, 81, 0.5);
        }
      }
    }
    @media only screen and (max-width: 900px) {
      flex-wrap: wrap;
    }
    @media only screen and (max-width: 600px) {
      .aboutmeImg > img {
        width: 18rem;
        height: 20rem;
      }
    }
  }
`;

export default AboutMe;
