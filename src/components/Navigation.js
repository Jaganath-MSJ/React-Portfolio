import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faLaptopCode,
  faGraduationCap,
  faDiagramProject,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <Nav>
      <h2 className="navHeader">
        <a href="/">
          Jaganath
          <span>&nbsp;Portfolio</span>
        </a>
      </h2>
      <ul className="navMenuBar">
        <li>
          <a href="#Home">
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#AboutMe">
            <FontAwesomeIcon icon={faUser} />
            <span>About Me</span>
          </a>
        </li>
        <li>
          <a href="#Skills">
            <FontAwesomeIcon icon={faLaptopCode} />
            <span>Skills</span>
          </a>
        </li>
        <li>
          <a href="#Education">
            <FontAwesomeIcon icon={faGraduationCap} />
            <span>Education</span>
          </a>
        </li>
        <li>
          <a href="#Projects">
            <FontAwesomeIcon icon={faDiagramProject} />
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a href="#Contact">
            <FontAwesomeIcon icon={faHeadset} />
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  flex-flow: nowrap;
  justify-content: space-between;
  z-index: 1;
  background-color: rgb(194, 189, 190);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  .navHeader {
    font-size: 2rem;
    margin: 1rem 0;
    margin-left: 2rem;
    & > a {
      display: flex;
      transition: 0.2s ease-in-out;
      & > span {
        display: none;
      }
      &:hover {
        color: dodgerblue;
      }
    }
  }
  .navMenuBar {
    display: flex;
    flex-wrap: nowrap;
    margin-right: 2rem;
    margin-top: 1.4rem;
    gap: 1.5rem;
    & > li {
      list-style: none;
      position: relative;
      & > a {
        flex-wrap: nowrap;
        font-size: 1.3rem;
        transition: 0.2s ease-in-out;
        & > svg {
          display: none;
        }
        &:hover {
          color: dodgerblue;
        }
      }
      &::after {
        content: "";
        height: 3px;
        width: 0;
        background: dodgerblue;
        position: absolute;
        left: 0;
        bottom: 0.5rem;
        transition: 0.2s ease-in-out;
      }
      &:hover::after {
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 800px) {
    justify-content: space-around;
    .navHeader {
      margin: 1rem 0;
      & > a > span {
        display: block;
      }
    }
    .navMenuBar {
      position: fixed;
      display: flex;
      position: absolute;
      flex-direction: column;
      top: 13rem;
      right: 0;
      margin-right: 0;
      padding: 1rem;
      background-color: rgb(194, 189, 190);
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
      border-radius: 1rem 0 0 1rem;
      & > li {
        & > a {
          display: flex;
          flex-wrap: nowrap;
          gap: 0.5rem;
          & > svg {
            display: block;
          }
          & > span {
            display: none;
          }
        }
        &::after {
          background: transparent;
        }
      }
      &:hover {
        transition: 0.5s ease-in-out;
        & span {
          display: block;
        }
      }
    }
    @media only screen and (max-width: 500px) {
      .navMenuBar {
        &:hover {
          & span {
            display: none;
          }
        }
      }
    }
  }
`;

export default Navigation;
