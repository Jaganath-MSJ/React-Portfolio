import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import styled from "styled-components";
import Data from "../Data/data.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiagramProject,
  faEye,
  faCode,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function Projects() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/projects") window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Section id="Projects">
      <h1>
        <FontAwesomeIcon icon={faDiagramProject} />
        &nbsp;
        {location.pathname === "/" ? "" : "All"} Projects
      </h1>
      <div className="projects">
        {(location.pathname === "/"
          ? Data.Projects.slice(0, 6)
          : Data.Projects
        ).map((project, index) => {
          return (
            <Project key={project.label} project={project} index={index} />
          );
        })}
      </div>
      {location.pathname === "/" && (
        <div className="viewAll">
          <Link to="/projects">
            View All <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </div>
      )}
    </Section>
  );
}

function Project({ project, index }) {
  const itemVariantsTop = {
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0 },
  };

  const tiltRef = useRef(null);
  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 15,
      speed: 400,
      glare: false,
    });
  }, []);

  return (
    <motion.article
      ref={tiltRef}
      key={project.label}
      className="project"
      variants={itemVariantsTop}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 1, delay: index * 0.07 }}
    >
      <div className="projectImg">
        <img src={project.img} alt={project.label} draggable="false" />
      </div>
      <div className="projectContent">
        <h2>{project.label}</h2>
        <div>
          <a href={project.view} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEye} /> View
          </a>
          <a href={project.code} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faCode} /> Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

const Section = styled.section`
  padding: 3rem 5%;
  padding-bottom: 6rem;
  height: auto;
  background-color: var(--background-color2);
  color: var(--text-color2);
  & > h1 {
    text-align: center;
    font-size: 3rem;
  }
  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 4rem 2rem;
    .project {
      .projectImg {
        & > img {
          width: 25rem;
          height: 15rem;
          object-fit: cover;
          border-radius: 1rem 1rem 0 0;
        }
      }
      .projectContent {
        position: absolute;
        color: var(--text-color1);
        background-color: rgb(149, 247, 183);
        margin-top: -1rem;
        width: 25rem;
        height: max-content;
        border-radius: 0 0 1rem 1rem;
        & > h2 {
          margin: 0.5rem 1rem;
        }
        & > div {
          margin: 0.5rem 2rem;
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-around;
          & > a {
            display: none;
            padding: 0.5rem 2rem;
            background-color: black;
            color: rgb(149, 247, 183);
            border-radius: 1rem;
            transition: 0.3s ease-in-out;
            &:hover {
              background-color: var(--hover-color1);
              color: black;
              box-shadow: 5px 5px 5px rgba(81, 81, 81, 0.5);
            }
          }
        }
      }
      &:hover .projectContent {
        margin-top: -3.5rem;
        transition: 0.3s ease-in-out;
      }
      &:hover .projectContent > div > a {
        display: block;
      }
    }
    @media only screen and (max-width: 900px) {
      & > .project > .projectImg > img {
        width: 20rem;
        height: 10rem;
      }
      & > .project > .projectContent {
        width: 20rem;
      }
    }
    @media only screen and (max-width: 500px) {
      gap: 6rem 2rem;
      .project {
        .projectContent {
          & > h2 {
            font-size: 1.3rem;
          }
          & > div > a {
            display: block;
          }
        }
        &:hover .projectContent {
          margin-top: -1rem;
        }
      }
    }
  }
  .viewAll {
    text-align: center;
    margin-top: 5rem;
    & > a {
      padding: 0.8rem 1.5rem;
      border: 3px solid var(--hover-color1);
      color: var(--text-color2);
      border-radius: 1rem;
      font-size: 1.1rem;
      font-weight: 500;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: var(--hover-color1);
        color: black;
        box-shadow: 5px 5px 5px rgba(81, 81, 81, 0.5);
      }
    }
    @media screen and (max-width: 500px) {
      margin-top: 7rem;
    }
  }
`;

export default Projects;
