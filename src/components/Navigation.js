import React from "react";
import "./style/Navigation.css";

function Navigation() {
  return (
    <nav>
      <h2>
        <a href="/">Jaganath</a>
      </h2>
      <ul className="menuBar">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#AboutMe">About Me</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#Education">Education</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
