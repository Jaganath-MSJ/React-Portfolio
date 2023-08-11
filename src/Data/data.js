import myImage from "../assets/Jaganath-M-S-Image.jpg";
import resume from "../assets/Jaganath-M-S-Resume.pdf";
import reactPortfolio from "../assets/React-Portfolio.png";

import appian from "../assets/skills/appian-logo.png";
import nodeJs from "../assets/skills/node-js-logo.png";
import mongoDB from "../assets/skills/mongo-db-logo.png";
import phpMyAdmin from "../assets/skills/php-my-admin-logo.png";
import redux from "../assets/skills/redux-logo.png";
import c from "../assets/skills/c-plus-plus-logo.png";
import java from "../assets/skills/java-logo.png";
import html from "../assets/skills/html-logo.png";
import css from "../assets/skills/css-logo.png";
import javaScript from "../assets/skills/java-script-logo.png";
import mySql from "../assets/skills/my-sql-logo.png";
import react from "../assets/skills/react-logo.png";
import github from "../assets/skills/github-logo.png";
import git from "../assets/skills/git-logo.png";

import socialMedia from "../assets/projects/Social-Media.png";
import weatherApp from "../assets/projects/Weather-App.png";
import jobSearch from "../assets/projects/Job-Search.png";
import happyChatApp from "../assets/projects/Happy-Chat.png";
import mobileStore from "../assets/projects/Mobile-Store.png";
import netflixClone from "../assets/projects/Netflix-Clone.png";
import basicsBankingSystem from "../assets/projects/Basics-Banking-System.png";
import paymentGatewayIntegation from "../assets/projects/Payment-Gateway-Integration.png";
import bank from "../assets/projects/Bank.jpg";
import farmerFriend from "../assets/projects/Farmer-Friend.png";
import colorIdentification from "../assets/projects/Color-Identification.png";
import detectionOfFaceMask from "../assets/projects/Detection-of-Face-Mask.png";
import reactCalculator from "../assets/projects/React-Calculator.png";

const nameWithInicial = "Jaganath M S";
const name = "Jaganath";

const linkedInLink = "https://www.linkedin.com/in/jaganathms";
const githubLink = "https://github.com/Jaganath-MSJ";
const telegramLink = "https://t.me/MSJ_J";

const email = "jagan.msjc@gmail.com";
const phone = "+91 9385304351";
const place = "Tamil Nadu, India - 636302";

export const Data = {
  Home: {
    name: nameWithInicial,
    role: [
      "Web Developer",
      "Frondend Developer",
      "Backend Developer",
      "Full Stack Developer",
    ],
    linkedInLink: linkedInLink,
    githubLink: githubLink,
    mail: email,
    telegramLink: telegramLink,
  },
  AboutMe: {
    img: myImage,
    name: `I'm ${name}`,
    role: "Passionate Web Developer",
    currently: `I am an engineering graduate with a major in Electrical and Electronics Engineering (EEE), and 
    I am enthusiastic about pursuing an entry-level role as a web developer.`,
    experience: `My skill set includes expertise in React JS, Node JS, Java, Appian, SQL, and MongoDB, among others. 
    I gained valuable hands-on experience during a 6-month internship at WNS Vuram Tech, where I specialized in the Appian tool.`,
    projects: `Subsequently, I embarked on personal projects such as Personal Portfolio, Social Media Platform, Weather App, and a Chat App. 
    These endeavors have further strengthened my development skills and have allowed me to apply my knowledge in practical scenarios.`,
    resume: resume,
  },
  Skills: [
    {
      label: "React",
      img: react,
    },
    {
      label: "Redux",
      img: redux,
    },
    {
      label: "Node.js",
      img: nodeJs,
    },
    {
      label: "Java",
      img: java,
    },
    {
      label: "Appian",
      img: appian,
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
      label: "Mongo DB",
      img: mongoDB,
    },
    {
      label: "Php My Admin",
      img: phpMyAdmin,
    },
    {
      label: "C",
      img: c,
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
      degree:
        "Bachelor Of Engineering In Electrical and Electronics Engineering",
      college: "Sri Krishna College of Engineering and Technology, Coimbatore",
      year: "2020 - 2023",
      isCompleted: "Completed",
    },
    {
      degree: "Diploma In Electrical and Electronics Engineering",
      college: "Thiagarajar Polytechnic College, Salem",
      year: "2017 - 2020",
      isCompleted: "Completed",
    },
    {
      degree: "10th - SSLC",
      college:
        "Sri Sarada Balamandir Boys Matric Higher Secondary School, Salem",
      year: "2016 - 2017",
      isCompleted: "Completed",
    },
  ],
  Projects: [
    {
      label: "Social Media",
      img: socialMedia,
      view: "https://msj-social-media.netlify.app",
      code: "https://github.com/Jaganath-MSJ/Social-Media",
    },
    {
      label: "Weather App",
      img: weatherApp,
      view: "https://msj-weather-app.netlify.app",
      code: "https://github.com/Jaganath-MSJ/Weather-App",
    },
    {
      label: "Job Search",
      img: jobSearch,
      view: "https://msj-job-search.netlify.app",
      code: "https://github.com/Jaganath-MSJ/Job-Search",
    },
    {
      label: "Happy Chat App",
      img: happyChatApp,
      view: "https://happychat-app.netlify.app",
      code: "https://github.com/Jaganath-MSJ/Happy-Chat-App",
    },
    {
      label: "Mobile Store",
      img: mobileStore,
      view: "https://msj-mobile-store.netlify.app",
      code: "https://github.com/Jaganath-MSJ/Mobile-Store",
    },
    {
      label: "React Calculator",
      img: reactCalculator,
      view: "https://msj-react-calculator.netlify.app",
      code: "https://github.com/Jaganath-MSJ/React-Calculator",
    },
    {
      label: "Bank System using Java",
      img: bank,
      view: "https://github.com/Jaganath-MSJ/Bank",
      code: "https://github.com/Jaganath-MSJ/Bank",
    },
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
      label: "Payment Gateway Integration",
      img: paymentGatewayIntegation,
      view: "https://jaganath-msj.github.io/Payment_Gateway_Integration",
      code: "https://github.com/Jaganath-MSJ/Payment_Gateway_Integration",
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
      label: "Portfolio",
      img: reactPortfolio,
      view: "https://jaganath-portfolio.netlify.app",
      code: "https://github.com/Jaganath-MSJ/React-Portfolio",
    },
  ],
  Footer: {
    name: `${name} Portfolio`,
    aboutMe: `I am a motivated and goal-driven individual, seeking entry-level opportunities. 
    I am organized, detail-oriented, and efficient in my work approach.`,
    thankYou: `Thank you for taking the time to visit my personal portfolio website. 
    If you'd like to connect, please feel free to reach out to me using the contact details provided below or through my social media profiles.`,
    phoneNo: phone,
    mail: email,
    place: place,
    linkedInLink: linkedInLink,
    githubLink: githubLink,
    telegramLink: telegramLink,
    linkedInName: nameWithInicial,
  },
};
