import React, {Component} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedIn } from '@fortawesome/free-solid-svg-icons';
// import { faGitHub } from '@fortawesome/free-solid-svg-icons';
// import { faTelegram } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './style/Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div class="footer_Content">
                    <div class="footer_About">
                        <h2>Jaganath Portfolio</h2>
                        <p>
                            Motivated entry level, goal driven individual with organised,
                            detail-oriented and efficient working person.
                            <br /><br />
                            Thank you for visiting my personal portfolio website.
                            Connect with me over social media.
                        </p>
                    </div>
                    <div class="footer_Links">
                        <h2>Links</h2>
                        <a href="#Home">Home</a>
                        <a href="#AboutMe">About Me</a>
                        <a href="#Skills">Skills</a>
                        <a href="#Education">Education</a>
                        <a href="#Project">Projects</a>
                        <a href="#Contact">Contact</a>
                    </div>
                    <div class="footer_Contact">
                        <h2>Contact</h2>
                        <p>
                            <span><FontAwesomeIcon icon={faPhone}/></span> +91 9385304351
                        </p>
                        <p>
                            <span><FontAwesomeIcon icon={faEnvelope}/></span> jagan.msjc@gmail.com
                        </p>
                        <p>
                            <span><FontAwesomeIcon icon={faMapMarkedAlt}/></span> Tamil Nadu, India - 636302
                        </p>
                        <div>
                            <a href="https://www.linkedin.com/in/jaganathms" target="_blank">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                            <a href="https://github.com/Jaganath-MSJ" target="_blank">
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </a>
                            <a href="mailto:jagan.msjc@gmail.com" target="_blank">
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </a>
                            <a href="https://t.me/MSJ_J" target="_blank">
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </a>
                        </div>
                    </div>
                </div>
                <p>
                    This Designed is made with <span><FontAwesomeIcon icon={faHeart}/></span> by <a href="https://www.linkedin.com/in/jaganathms">Jaganath M S</a>
                </p>
            </footer>
        )
    }
}

export default Footer;