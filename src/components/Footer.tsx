import React from "react";
import styled from "styled-components";
import PhoneIcon from "../icons/PhoneIcon";
import EmailIcon from "../icons/EmailIcon";
import MapMarkedIcon from "../icons/MapMarkedIcon";
import LinkedIn from "../icons/brand_logo/LinkedIn";
import Github from "../icons/brand_logo/Github";
import Telegram from "../icons/brand_logo/Telegram";
import HeartIcon from "../icons/HeartIcon";
import Data from "../data/data.json";

function Footer() {
  return (
    <Foot>
      <div className="footerContent">
        <div className="footerAbout">
          <h2>{Data.name}&nbsp;Portfolio</h2>
          <p>{Data.aboutMe}</p>
          <p>{Data.thankYou}</p>
        </div>
        <nav className="footerLinks">
          <h2>Links</h2>
          <a href="#Home">Home</a>
          <a href="#AboutMe">About Me</a>
          <a href="#Skills">Skills</a>
          <a href="#Education">Education</a>
          <a href="#Project">Projects</a>
          <a href="#Contact">Contact</a>
        </nav>
        <address className="footerContact">
          <h2>Contact</h2>
          <p>
            <span>
              <PhoneIcon />
            </span>
            &nbsp;
            {Data.phone}
          </p>
          <p>
            <span>
              <EmailIcon />
            </span>
            &nbsp;
            {Data.email}
          </p>
          <p>
            <span>
              <MapMarkedIcon />
            </span>
            &nbsp;
            {Data.place}
          </p>
          <div>
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
          </div>
        </address>
      </div>
      <div className="footerBottom">
        <p>
          This Designed is made with
          <HeartIcon />
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
  .footerContent {
    padding: 1rem 4rem;
    flex-wrap: wrap;
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
          stroke: var(--hover-color2);
          fill: var(--hover-color2);
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
          fill: black;
          stroke: black;
          &:hover {
            background: transparent;
            fill: var(--hover-color2);
            stroke: var(--hover-color2);
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
  .footerBottom {
    & > p {
      display: flex;
      align-items: center;
      fill: red;
    }
  }
`;

export default Footer;
