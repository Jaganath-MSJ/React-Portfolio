import React from "react";
import styled from "styled-components";
import { Data } from "../Data/data";

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
  const footer = Data.Footer;
  return (
    <Foot>
      <div className="footerContent">
        <div className="footerAbout">
          <h2>{footer.name}</h2>
          <p>
            {footer.aboutMe}
            <br />
            <br />
            {footer.thankYou}
          </p>
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
            {footer.phoneNo}
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>{" "}
            {footer.mail}
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </span>{" "}
            {footer.place}
          </p>
          <div>
            <a href={footer.linkedInLink} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={footer.githubLink} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={"mailto:" + footer.mail} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href={footer.telegramLink} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p>
          This Designed is made with <FontAwesomeIcon icon={faHeart} />
          by <a href={footer.linkedIn}>{footer.linkedInName}</a>
        </p>
      </div>
    </Foot>
  );
}

const Foot = styled.footer`
  background-color: black;
  color: #f7f7f7;
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
        color: rgb(194, 189, 190);
      }
    }
    .footerLinks {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      & > a {
        font-size: 1.1rem;
        font-weight: bold;
        color: rgb(194, 189, 190);
        transition: 0.2s ease-in-out;
        &:hover {
          color: dodgerblue;
        }
      }
    }
    .footerContact {
      & > p {
        display: flex;
        gap: 1rem;
        color: rgb(194, 189, 190);
        font-size: 1.1rem;
        & > span {
          color: blueviolet;
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
          color: black;
          background-color: white;
          border: 1px solid white;
          border-radius: 1.5rem;
          transition: 0.3s ease-in-out;
          &:hover {
            background: transparent;
            color: blueviolet;
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
        color: blueviolet;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #f7f7f7;
        }
      }
    }
  }
`;

export default Footer;
