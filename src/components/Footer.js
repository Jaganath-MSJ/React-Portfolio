import React from "react";
import styled from "styled-components";
import Data from "../Data/data.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkedAlt,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <Foot>
      <div className="footerContent">
        <div className="footerAbout">
          <h2>{Data.name} Portfolio</h2>
          <p>{Data.aboutMe}</p>
          <p>{Data.thankYou}</p>
        </div>
        <div className="footerLinks">
          <h2>Links</h2>
          <a href="#Home">Home</a>
          <a href="#AboutMe">About Me</a>
          <a href="#Skills">Skills</a>
          <a href="#Education">Education</a>
          <a href="#Project">Projects</a>
          <a href="#Contact">Contact</a>
        </div>
        <div className="footerContact">
          <h2>Contact</h2>
          <p>
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>{" "}
            {Data.phone}
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>{" "}
            {Data.email}
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </span>{" "}
            {Data.place}
          </p>
          <div>
            <a href={Data.linkedInLink} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={Data.githubLink} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={`mailto:${Data.email}`} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href={Data.telegramLink} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p>
          This Designed is made with <FontAwesomeIcon icon={faHeart} />
          by <a href={Data.linkedInLink}>{Data.nameInc}</a>
        </p>
      </div>
    </Foot>
  );
}

const Foot = styled.footer`
  background-color: black;
  color: var(--text-color2);
  width: 100%;
  padding-bottom: 0.1rem;
  .footerContent {
    padding: 1rem 4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0rem 3rem;
    .footerAbout {
      display: flex;
      flex-direction: column;
      width: 30rem;
      & > p {
        text-align: justify;
        font-size: 1.2rem;
        color: var(--color1);
      }
    }
    .footerLinks {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      & > a {
        outline: none;
        border: none;
        font-size: 1.1rem;
        font-weight: bold;
        color: var(--color1);
        transition: 0.2s ease-in-out;
        &:hover {
          color: var(--hover-color1);
        }
      }
    }
    .footerContact {
      & > p {
        display: flex;
        gap: 1rem;
        color: var(--color1);
        font-size: 1.1rem;
        & > span {
          color: var(--hover-color2);
        }
      }
      & > div {
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
          background-color: white;
          border: 1px solid white;
          border-radius: 1.5rem;
          transition: 0.3s ease-in-out;
          &:hover {
            background: transparent;
            color: var(--hover-color2);
          }
        }
      }
    }
    @media only screen and (max-width: 600px) {
      .footerLinks > * {
        display: none;
      }
    }
  }
  & > div {
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: bold;
    & > p {
      text-align: center;
      & > svg {
        color: red;
        margin-right: 0.3rem;
      }
      & > a {
        outline: none;
        border: none;
        color: var(--hover-color2);
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: var(--text-color2);
        }
      }
    }
  }
`;

export default Footer;
