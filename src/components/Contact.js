import React, { useState } from "react";
import emailjs from "emailjs-com";

import contact from "./../img/contact.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import "./style/Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState();

  const handleSubmitToSendMail = async (e) => {
    e.preventDefault();
    try {
      const templateParams = {
        from_mail: email,
        name: name,
        message: message,
        contact: `email : ${email} ${phone ? `and phone : ${phone}` : ""}`,
      };
      const result = await emailjs.send(
        "service_oovklos",
        "template_d32swih",
        templateParams,
        "f0DXl-qv80B9XXFLP"
      );

      if (result.status === 200) {
        setResponseMessage("Email sent successfully");
      } else {
        setResponseMessage("Failed to send email");
      }
    } catch (err) {
      setResponseMessage("Failed to send email");
    }
  };

  return (
    <section className="contact" id="Contact">
      <h1>
        <FontAwesomeIcon icon={faHeadset} /> Contact
      </h1>
      <div>
        <div className="conatctImage">
          <img src={contact} alt="Contact" />
        </div>
        <div className="contactForm">
          <form onSubmit={handleSubmitToSendMail}>
            <div className="contactInput">
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="contactInput">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="contactInput">
              <span>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              <input
                type="phone"
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="contactInput">
              <span>
                <FontAwesomeIcon icon={faCommentDots} />
              </span>
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="submitConform">
              <p>{responseMessage}</p>
              <div className="contactSubmit">
                <button type="submit">Submit</button>
                <span>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
