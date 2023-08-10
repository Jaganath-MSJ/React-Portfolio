import React from "react";
import styled from "styled-components";
import { Data } from "../Data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <Section id="Home">
      <div>
        <h3>Hey! I am</h3>
        <h1>{Data.Home.name}</h1>
        <h2>I am {Data.Home.role}.</h2>
        <div className="connectMe">
          <a href={Data.Home.linkedInLink} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href={Data.Home.githubLink} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href={`mailto: + ${Data.Home.mail}`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href={Data.Home.telegramLink} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
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
    }
    & > h2 {
      font-size: 1.7rem;
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
    }
  }
`;

export default Home;
