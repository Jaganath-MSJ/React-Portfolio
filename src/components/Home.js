import React from "react";
import "./style/Home.css";
import { Data } from "../Data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <section className="home" id="Home">
      <div>
        <h3>Hey! I am</h3>
        <h1>{Data.Home.name}</h1>
        <h2>I am {Data.Home.role}.</h2>
        <div className="connectMe">
            <a href={Data.Footer.linkedIn} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={Data.Footer.github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={"mailto:" + Data.Footer.mail} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href={Data.Footer.telegram} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </div>
      </div>
    </section>
  );
}

export default Home;
