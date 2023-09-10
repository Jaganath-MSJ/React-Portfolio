import React, { useCallback, useEffect, useMemo, useState } from "react";
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
  const sections = useMemo(
    () => ["Home", "AboutMe", "Skills", "Education", "Projects", "Contact"],
    []
  );
  const [activeSection, setActiveSection] = useState(sections[0]);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    sections.forEach((section) => {
      const target = document.getElementById(section);
      if (target) {
        const offsetTop = target.offsetTop;
        const offsetBottom = offsetTop + target.offsetHeight;
        if (
          scrollPosition >= offsetTop - 200 &&
          scrollPosition < offsetBottom - 200
        ) {
          setActiveSection(section);
        }
      }
    });
  }, [sections]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Nav>
      <h2 className="navHeader">
        <a href="/">
          Jaganath
          <span>&nbsp;Portfolio</span>
        </a>
      </h2>
      <ul className="navMenuBar">
        <li className={activeSection === "Home" ? "active" : ""}>
          <a href="/#Home">
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
          </a>
        </li>
        <li className={activeSection === "AboutMe" ? "active" : ""}>
          <a href="/#AboutMe">
            <FontAwesomeIcon icon={faUser} />
            <span>About Me</span>
          </a>
        </li>
        <li className={activeSection === "Skills" ? "active" : ""}>
          <a href="/#Skills">
            <FontAwesomeIcon icon={faLaptopCode} />
            <span>Skills</span>
          </a>
        </li>
        <li className={activeSection === "Education" ? "active" : ""}>
          <a href="/#Education">
            <FontAwesomeIcon icon={faGraduationCap} />
            <span>Education</span>
          </a>
        </li>
        <li className={activeSection === "Projects" ? "active" : ""}>
          <a href="/#Projects">
            <FontAwesomeIcon icon={faDiagramProject} />
            <span>Projects</span>
          </a>
        </li>
        <li className={activeSection === "Contact" ? "active" : ""}>
          <a href="/#Contact">
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
  width: 100%;
  display: flex;
  flex-flow: nowrap;
  justify-content: space-between;
  z-index: 1;
  background-color: var(--color1);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  .navHeader {
    font-size: 2rem;
    margin: 1rem 0;
    margin-left: 2rem;
    & > a {
      display: flex;
      outline: none;
      border: none;
      transition: 0.2s ease-in-out;
      & > span {
        display: none;
      }
      &:hover {
        color: var(--hover-color1);
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
        outline: none;
        border: none;
        transition: 0.2s ease-in-out;
        & > svg {
          display: none;
        }
        &:hover {
          color: var(--hover-color1);
        }
      }
      &::after {
        content: "";
        height: 3px;
        width: 0;
        background: var(--hover-color1);
        position: absolute;
        top: 1.8rem;
        left: 0;
        bottom: 0.5rem;
        transition: 0.2s ease-in-out;
      }
      &:hover::after {
        width: 100%;
      }
    }
    .active {
      & > a {
        color: var(--hover-color1);
      }
      &::after {
        height: 3px;
        width: 100%;
        background: var(--hover-color1);
        position: absolute;
        top: 1.8rem;
        left: 0;
        bottom: 0.5rem;
        transition: 0.2s ease-in-out;
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
          display: none;
        }
      }
      .active::after {
        display: none;
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
