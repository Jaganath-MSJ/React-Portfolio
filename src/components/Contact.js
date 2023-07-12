import React, {Component} from "react";

import contact from "./../img/contact.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import './style/Contact.css';

class Contact extends Component {
    render() {
        return (
            <section class="contact" id="Contact">
                <h1><FontAwesomeIcon icon={faHeadset}/> Contact</h1>
                <div>
                    <div class="conatct_Image">
                        <img src={contact} alt="Contact Image" />
                    </div>
                    <div class="contact_Form">
                        <form action="">
                            <div class="contact_Input">
                                <span><FontAwesomeIcon icon={faUser}/></span>
                                <input type="text" name="name" placeholder="Name" required />
                            </div>
                            <div class="contact_Input">
                                <span><FontAwesomeIcon icon={faEnvelope}/></span>
                                <input type="text" name="email" placeholder="Email" required />
                            </div>
                            <div class="contact_Input">
                                <span><FontAwesomeIcon icon={faPhoneAlt}/></span>
                                <input type="text" name="phone" placeholder="Phone" />
                            </div>
                            <div class="contact_Input">
                                <span><FontAwesomeIcon icon={faCommentDots}/></span>
                                <textarea type="text" name="message" placeholder="Message" required></textarea>
                            </div>
                            <div class="contact_Submit">
                                <input type="submit" name="submit" placeholder="Submit" />
                                <span><FontAwesomeIcon icon={faPaperPlane}/></span>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;