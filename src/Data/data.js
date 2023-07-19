import myImage from "../img/Jaganath M S Image.jpg";
import resume from "../pdf/Jaganath M S Resume.pdf";

import c from "../img/c-plus-plus-logo.png";
import java from "../img/java-logo.png";
import html from "../img/html-logo.png";
import css from "../img/css-logo.png";
import javaScript from "../img/java-script-logo.png";
import mySql from "../img/my-sql-logo.png";
import react from "../img/react-logo.png";
import github from "../img/github-logo.png";
import git from "../img/git-logo.png";

import netflixClone from "../img/Netflix Clone.png";
import basicsBankingSystem from "../img/Basics Banking System.png";
import paymentGatewayIntegation from "../img/Payment Gateway Integration.png";
import bank from "../img/Bank.jpg";
import farmerFriend from "../img/Farmer Friend.png";
import colorIdentification from "../img/Color Identification.png";
import detectionOfFaceMask from "../img/Detection of Face Mask.png";
import reactCalculator from "../img/React Calculator.png";

export const Data = {
  Home: {
    name: "Jaganath M S",
    role: "Web Developer",
  },
  AboutMe: {
    img: myImage,
    name: "Jaganath",
    role: "Web Developer",
    currently:
      "I am Currently Studying Third year at Sri Krishna College of Engineering and Technology.",
    contact: [
      { key: "DOB", value: "Oct 23, 2001" },
      { key: "Email", value: "jagan.msjc@gmail.com" },
      { key: "Phone", value: "+91 9385304351" },
      { key: "Place", value: "Tamil Nadu, India - 636302" },
    ],
    resume: resume,
  },
  Skills: [
    {
      label: "C",
      img: c,
    },
    {
      label: "Java",
      img: java,
    },
    {
      label: "HTML",
      img: html,
    },
    {
      label: "CSS",
      img: css,
    },
    {
      label: "Java Script",
      img: javaScript,
    },
    {
      label: "My Sql",
      img: mySql,
    },
    {
      label: "React",
      img: react,
    },
    {
      label: "Github",
      img: github,
    },
    {
      label: "Git",
      img: git,
    },
  ],
  Education: [
    {
      degree: "10th - SSLC",
      college:
        "Sri Sarada Balamandir Boys Matric Higher Secondary School, Salem",
      year: "2016 - 2017",
      isCompleted: "Completed",
    },
    {
      degree: "Diploma In Electrical and Electronics Engineering",
      college: "Thiagarajar Polytechnic College Polytechnic, Salem",
      year: "2017 - 2020",
      isCompleted: "Completed",
    },
    {
      degree:
        "Bachelor Of Engineering In Electrical and Electronics Engineering",
      college: "Sri Krishna College of Engineering and Technology, Coimbatore",
      year: "2020 - 2023",
      isCompleted: "Present",
    },
  ],
  Projects: [
    {
      label: "Netflix Clone",
      img: netflixClone,
      view: "https://jaganath-msj.github.io/Netflix_Clone-Shape_AI-Bootcamp",
      code: "https://github.com/Jaganath-MSJ/Netflix_Clone-Shape_AI-Bootcamp",
    },
    {
      label: "Basics Banking System",
      img: basicsBankingSystem,
      view: "https://jaganath-msj.github.io/Basics_Banking_System",
      code: "https://github.com/Jaganath-MSJ/Basics_Banking_System",
    },
    {
      label: "Payment Gateway Integation",
      img: paymentGatewayIntegation,
      view: "https://jaganath-msj.github.io/Payment_Gateway_Integration",
      code: "https://github.com/Jaganath-MSJ/Payment_Gateway_Integration",
    },
    {
      label: "Bank",
      img: bank,
      view: "https://github.com/Jaganath-MSJ/Bank",
      code: "https://github.com/Jaganath-MSJ/Bank",
    },
    {
      label: "Farmer Friend",
      img: farmerFriend,
      view: "https://github.com/Jaganath-MSJ/Farmer-Friend",
      code: "https://github.com/Jaganath-MSJ/Farmer-Friend",
    },
    {
      label: "Color Identification",
      img: colorIdentification,
      view: "https://youtu.be/mUKsMSvCYEU",
      code: "https://github.com/Jaganath-MSJ/Color-Identification",
    },
    {
      label: "Detection Of Face Mask",
      img: detectionOfFaceMask,
      view: "https://youtu.be/TGikf_Y0c50",
      code: "https://github.com/Jaganath-MSJ/Detection_of_face_mask",
    },
    {
      label: "React Calculator",
      img: reactCalculator,
      view: "https://github.com/Jaganath-MSJ/React-Calculator",
      code: "https://github.com/Jaganath-MSJ/React-Calculator",
    },
  ],
  Footer: {
    name: "Jaganath Portfolio",
    aboutMe:
      "Motivated entry level, goal driven individual with organised, detail-oriented and efficient working person.",
    thankYou:
      "Thank you for visiting my personal portfolio website. Connect with me over social media.",
    phoneNo: "+91 9385304351",
    mail: "jagan.msjc@gmail.com",
    place: "Tamil Nadu, India - 636302",
    linkedIn: "https://www.linkedin.com/in/jaganathms",
    github: "https://github.com/Jaganath-MSJ",
    telegram: "https://t.me/MSJ_J",
    linkedInName: "Jaganath M S",
  },
};
