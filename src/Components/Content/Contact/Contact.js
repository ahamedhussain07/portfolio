import classes from "./Contact.module.css";

import EmailForm from "./EmailForm";

import { FiMail, FiSmartphone, FiMapPin, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <h2>Contact</h2>

      <div className={classes.contact}>
        <div className={classes.location} data-aos="fade-right">
          <div style={{ marginBottom: "20px" }}>
            <span>
              {" "}
              <FiMapPin />
            </span>{" "}
            <h3>Location:</h3>
            <div className={classes.contactText}>
              22 east street,adirai, thanjai dist,TN
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <span>
              <FiMail size={"20px"} />
            </span>{" "}
            <h3>Email:</h3>
            <div className={classes.contactText} style={{ marginLeft: "45px" }}>
              ahamedhussain200208@gmail.com
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <span>
              <FiSmartphone />
            </span>{" "}
            <h3>Call:</h3>
            <div>+91 9790640540</div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <span>
              <FiLinkedin />
            </span>{" "}
            <h3>Linkedin:</h3>
            <div>
              <a
                style={{ textDecoration: "none", color: "#000" }}
                className={classes.contactText}
                href="https://www.linkedin.com/in/ahamed-hussain-8935ba231"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/ahamed-hussain
              </a>
            </div>
          </div>
        </div>
        <div className={classes.emailSend} data-aos="fade-left">
          <EmailForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
