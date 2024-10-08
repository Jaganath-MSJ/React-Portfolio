import React, { ChangeEvent, FormEvent, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { motion } from "framer-motion";
import styled from "styled-components";
import UserIcon from "../icons/navigation_icons/UserIcon";
import EmailIcon from "../icons/EmailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import MessageIcon from "../icons/MessageIcon";
import PaperPlaneIcon from "../icons/PaperPlaneIcon";
import DoubleAngleUp from "../icons/DoubleAngleUp";
import { NAVIGATION_STRING } from "../data/Navigation.constant";

function Contact() {
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };
  const itemVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 },
  };

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    if (e.target.name === "phone") {
      setEmailData((prevData) => {
        return {
          ...prevData,
          [e.target.name]: e.target.value.replace(/\D+/g, "").trim(),
        };
      });
    } else if (e.target.name === "email") {
      setEmailData((prevData) => {
        return {
          ...prevData,
          [e.target.name]: e.target.value.replace(/\s+/g, "").trim(),
        };
      });
    } else {
      setEmailData((prevData) => {
        return {
          ...prevData,
          [e.target.name]: e.target.value.replace(/ {2,}/g, " "),
        };
      });
    }
  }

  function handleValidation(): boolean {
    if (emailData.name.trim().length <= 3) {
      setResponseMessage("Name is too short");
      return false;
    }
    if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailData.email)
    ) {
      setResponseMessage("Email is invalid");
      return false;
    }
    if (emailData.phone.length !== 0 && emailData.phone.length !== 10) {
      setResponseMessage("Phone number is invalid");
      return false;
    }
    if (emailData.message.trim().length < 10) {
      setResponseMessage("Message is too short");
      return false;
    }
    return true;
  }

  async function handleEmail(): Promise<EmailJSResponseStatus> {
    const templateParams = {
      from_mail: emailData.email,
      name: emailData.name.trim(),
      message: emailData.message.trim(),
      contact: `email : ${emailData.email} ${
        emailData.phone ? `and phone : ${emailData.phone}` : ""
      }`,
    };
    const result = await emailjs.send(
      "service_oovklos",
      "template_d32swih",
      templateParams,
      "f0DXl-qv80B9XXFLP"
    );
    return result;
  }

  function handleSubmitToSendMail(e: FormEvent): void {
    e.preventDefault();
    setResponseMessage("");
    try {
      if (handleValidation()) {
        setLoading(true);
        handleEmail().then((result) => {
          if (result.status === 200) {
            setResponseMessage("Email sent successfully");
            setEmailData({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
          } else {
            setResponseMessage("Failed to send email");
          }
        });
      }
    } catch (err) {
      setResponseMessage("Failed to send email");
    }
    setLoading(false);
    setTimeout(() => {
      setResponseMessage("");
    }, 5000);
  }

  return (
    <Section id={NAVIGATION_STRING[6].LABEL}>
      <h1>
        {NAVIGATION_STRING[6].ICON}
        &nbsp;{NAVIGATION_STRING[6].LABEL}
      </h1>
      <div className="content">
        <motion.div
          className="conatctImage"
          variants={itemVariantsLeft}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 1 }}
        >
          <img src="assets/contact.png" alt="Contact" draggable="false" />
        </motion.div>
        <motion.div
          className="contactForm"
          variants={itemVariantsRight}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 1 }}
        >
          <form onSubmit={handleSubmitToSendMail}>
            <div className="contactInput">
              <label htmlFor="name">
                <UserIcon />
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={emailData.name}
                onChange={handleInputChange}
                autoComplete="name"
              />
            </div>
            <div className="contactInput">
              <label htmlFor="email">
                <EmailIcon />
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={emailData.email}
                onChange={handleInputChange}
                autoComplete="email"
              />
            </div>
            <div className="contactInput">
              <label htmlFor="phone">
                <PhoneIcon />
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={emailData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="contactInput">
              <label htmlFor="message">
                <MessageIcon />
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                value={emailData.message}
                onChange={handleInputChange}
              />
            </div>
            <div className="submitConform">
              <p>{responseMessage}</p>
              <div className="contactSubmit">
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  Submit &nbsp;
                  <PaperPlaneIcon />
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
      <div className="goTop">
        <DoubleAngleUp onClick={() => window.scrollTo(0, 0)} />
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 3rem 10%;
  padding-bottom: 2rem;
  height: auto;
  & > h1 {
    text-align: center;
    font-size: 3rem;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1rem;
    background-color: rgba(220, 220, 220, 0.5);
    border-radius: 1rem;
    .conatctImage > img {
      width: 25rem;
      height: 25rem;
      opacity: 1;
    }
    .contactForm > form {
      .contactInput {
        display: flex;
        flex-wrap: nowrap;
        margin: 1rem 0;
        background-color: var(--text-color2);
        border: 1px solid black;
        border-radius: 0.3rem;
        padding: 0.2rem 0.5rem;
        & > label {
          font-size: 1.2rem;
          margin-top: 0.3rem;
          fill: rgb(194, 189, 190);
          stroke: rgb(194, 189, 190);
        }
        & > input,
        & > textarea {
          background: transparent;
          border: none;
          outline: none;
          font-size: 1.1rem;
          width: 30rem;
          height: 2rem;
          padding-left: 0.7rem;
        }
        & > textarea {
          height: 5.5rem;
        }
      }
      .submitConform {
        display: flex;
        justify-content: space-between;
        .contactSubmit {
          & > button {
            width: 8rem;
            height: 3rem;
            font-size: 1.1rem;
            color: var(--text-color2);
            background-color: var(--hover-color1);
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: 0.3s ease-in-out;
            fill: white;
            &:hover {
              color: black;
              fill: black;
              box-shadow: 5px 5px 5px rgba(81, 81, 81, 0.5);
            }
          }
        }
        & > p {
          margin-top: 0;
          font-weight: bold;
          font-size: large;
        }
      }
    }
    @media only screen and (max-width: 680px) {
      .conatctImage > img {
        width: 15rem;
        height: 15rem;
      }
      .contactForm > form > .contactInput {
        & > input,
        & > textarea {
          width: 100%;
        }
      }
    }
  }
  .goTop {
    text-align: center;
    padding-top: 2rem;
    & > svg {
      background-color: var(--hover-color1);
      padding: 0.9rem 1rem;
      border-radius: 50%;
      color: var(--text-color2);
      cursor: pointer;
      transition: 0.3s ease-in-out;
      fill: white;
      &:hover {
        fill: black;
      }
    }
  }
`;

export default Contact;
