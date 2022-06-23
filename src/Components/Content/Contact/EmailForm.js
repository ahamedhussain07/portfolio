import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import classes from "./EmailForm.module.css";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [disabled, setDisabled] = useState(true);

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const subjectHandler = (e) => {
    setSubject(e.target.value);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t1qyypv",
        "template_65wypp3",
        e.target,
        "E9ghymSNkeDy5l7H0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
    setDisabled(true);
    
  };

  useEffect(() => {
    if (
      name.length > 3 &&
      email.length > 3 &&
      subject.length > 3 &&
      message.length > 3
    ) {
      setDisabled(false);
    }
  }, [name, email, subject, message]);

  return (
    <>
      <form className={classes.formInput} onSubmit={sendEmail} >
        <div >
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            min="3"
            onChange={nameHandler}
            value={name}
          />
        </div>
        <div>
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            onChange={emailHandler}
            value={email}
          />
        </div>
        <div>
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            min="3"
            onChange={subjectHandler}
            value={subject}
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
          
            name="message"
            rows="7"
            cols="30"
            min="3"
            onChange={messageHandler}
            value={message}
          ></textarea>
        </div>
        <div className={classes.formButton} style={{ textAlign: "center" }}>
          <button
            className={disabled ? classes.disabled : classes.unDisabled}
            disabled={disabled}
          >
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default EmailForm;
