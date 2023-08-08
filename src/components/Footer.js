import React from "react";
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

import "./style/Footer.css";

function Footer() {
  const footer = Data.Footer;
  return (
    <footer>
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
            <a href={footer.linkedIn} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={footer.github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={"mailto:" + footer.mail} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href={footer.telegram} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </div>
        </div>
      </div>
      <p>
        This Designed is made with{" "}
        <span>
          <FontAwesomeIcon icon={faHeart} />
        </span>{" "}
        by <a href={footer.linkedIn}>{footer.linkedInName}</a>
      </p>
    </footer>
  );
}

export default Footer;
