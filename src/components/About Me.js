import React, {Component} from "react";

import myImage from "./../img/Jaganath M S Image.jpg";
import resume from "./../pdf/Jaganath M S Resume.pdf";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './style/About Me.css';

class AboutMe extends Component {
    render() {
        return (
            <section class="aboutme" id="AboutMe">
                <h1><FontAwesomeIcon icon={faUser}/> About Me</h1>
                <div>
                    <div class="aboutme_img">
                        <img src={myImage} alt="Jaganath M S" />
                    </div>
                    <div class="aboutme_details">
                        <h2>I'm Jaganath</h2>
                        <p>Passionate with Web Developer</p>
                        <h4>I am Currently Studying Third year at Sri Krishna College of Engineering and Technology.
                        </h4>
                        <div class="aboutme_contact">
                            <p>DOB: <span>Oct 23, 2001</span></p>
                            <p>Email: <span>jagan.msjc@gmail.com</span></p>
                            <p>Phone: <span>+91 9385304351</span></p>
                            <p>Place: <span>Tamil Nadu, India - 636302</span></p>
                        </div>
                        <a href={resume} target="_blank">Resume <FontAwesomeIcon icon={faAngleRight} /></a>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutMe;