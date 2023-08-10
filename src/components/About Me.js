import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import styled from "styled-components";
import { Data } from "../Data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
  const aboutMe = Data.AboutMe;
  const tiltRef = useRef(null);
  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 10,
      speed: 400,
      glare: false,
    });
  }, []);
  
  return (
    <Section id="AboutMe">
      <h1>
        <FontAwesomeIcon icon={faUser} />
        &nbsp;About Me
      </h1>
      <div>
        <div className="aboutmeImg" ref={tiltRef}>
          <img src={aboutMe.img} draggable="false" alt="Jaganath M S" />
        </div>
        <div className="aboutmeDetails">
          <h2>{aboutMe.name}</h2>
          <h3>{aboutMe.role}</h3>
          <h4>{aboutMe.currently}</h4>
          <div className="aboutmeContact">
            {aboutMe.contact.map((contact) => {
              return (
                <p key={contact.key}>
                  <span>{contact.key}:</span>&nbsp;{contact.value}
                </p>
              );
            })}
          </div>
          <a href={aboutMe.resume} target="_blank" rel="noreferrer">
            Resume&nbsp;
            <FontAwesomeIcon icon={faAngleRight} />
          </a>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 3rem 5%;
  padding-bottom: 8rem;
  height: auto;
  background-color: #f7f7f7;
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
      .aboutmeContact {
        display: grid;
        grid-template-columns: 35% 50%;
        font-size: 1.1rem;
        font-weight: 400;
        margin-bottom: 2rem;
        & > p {
          & > span {
            color: dodgerblue;
          }
        }
      }
      & > a {
        margin-top: 2rem;
        padding: 1rem 2rem;
        background-color: dodgerblue;
        color: white;
        border-radius: 1rem;
        font-size: 1.2rem;
        transition: 0.3s ease-in-out;
        & > svg {
          font-size: 1.4rem;
        }
        &:hover {
          color: black;
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
      .aboutmeDetails > .aboutmeContact {
        grid-template-columns: 100%;
      }
    }
  }
`;

export default AboutMe;
