import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faLaptopCode,
  faGraduationCap,
  faBriefcase,
  faDiagramProject,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

export const NAVIGATION_STRING = [
  {
    LABLE: "Home",
    ICON: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    LABLE: "AboutMe",
    ICON: <FontAwesomeIcon icon={faUser} />,
  },
  {
    LABLE: "Skills",
    ICON: <FontAwesomeIcon icon={faLaptopCode} />,
  },
  {
    LABLE: "Education",
    ICON: <FontAwesomeIcon icon={faGraduationCap} />,
  },
  {
    LABLE: "Experience",
    ICON: <FontAwesomeIcon icon={faBriefcase} />,
  },
  {
    LABLE: "Projects",
    ICON: <FontAwesomeIcon icon={faDiagramProject} />,
  },
  {
    LABLE: "Contact",
    ICON: <FontAwesomeIcon icon={faHeadset} />,
  },
];
