import React, { Component } from "react";
import { Data } from "../Data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "./style/About Me.css";

class AboutMe extends Component {
  render() {
    const aboutMe = Data.AboutMe;
    return (
      <section class="aboutme" id="AboutMe">
        <h1>
          <FontAwesomeIcon icon={faUser} /> About Me
        </h1>
        <div>
          <div class="aboutme_img">
            <img src={aboutMe.img} alt="Jaganath M S" />
          </div>
          <div class="aboutme_details">
            <h2>{aboutMe.name}</h2>
            <p>{aboutMe.role}</p>
            <h4>{aboutMe.currently}</h4>
            <div class="aboutme_contact">
              {aboutMe.contact.map((contact) => {
                return (
                  <p>
                    {contact.key}: <span>{contact.value}</span>
                  </p>
                );
              })}
            </div>
            <a href={aboutMe.resume} target="_blank" rel="noreferrer">
              Resume <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;
