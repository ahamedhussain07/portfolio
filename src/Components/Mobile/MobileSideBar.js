import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import * as FaIcon from "react-icons/fa";
import { IconContext } from "react-icons";
import { SiFreelancer } from "react-icons/si";
import { Link } from "react-scroll";

import classes from '../Header/Sidebar.module.css'
import photo from "../../Assets/photo.jpg";

import "./MobileSideBar.css";

const icons = [
  {
    id: 1,
    name: <FaIcon.FaHome />,
    text: "Home",
    link: "home",
  },
  {
    id: 2,
    name: <FaIcon.FaUser />,
    text: "About",
    link: "about",
  },

  {
    id: 3,
    name: <FaIcon.FaCode />,
    text: "Skills",
    link: "skills",
  },
  {
    id: 4,
    name: <FaIcon.FaLaptopCode />,
    text: "Projects",
    link: "projects",
  },
  {
    id: 5,
    name: <FaIcon.FaPhoneAlt />,
    text: "Contact",
    link: "contact",
  },
];

const MobileSideBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const sidebarHandler = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="mobileNavbar">
        {!sidebar ? (
          <FaBars onClick={sidebarHandler} />
        ) : (
          <AiOutlineClose onClick={sidebarHandler} />
        )}
      </div>
      <nav className={sidebar ? "navbar active" : "navbar"}>
        <header className={classes.header}>
          <img src={photo} alt="myface" />

          <div className={classes.name}>Ahamed Hussain</div>
          <div className={classes.socialIcons}>
            <a
              href="https://www.instagram.com/hussain_yeager/"
              target="_blank"
              rel="noreferrer"
            >
              <FaIcon.FaInstagram />
            </a>
            <a
              href="https://github.com/ahamedhussain07"
              target="_blank"
              rel="noreferrer"
            >
              <FaIcon.FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ahamed-hussain-8935ba231"
              target="_blank"
              rel="noreferrer"
            >
              <FaIcon.FaLinkedin />
            </a>
            <a
              href="https://twitter.com/ahamedH85986722"
              target="_blank"
              rel="noreferrer"
            >
              <FaIcon.FaTwitter />
            </a>
            <a
              href="https://www.freelancer.in/u/HussainAdirai"
              target="_blank"
              title="freelancer"
              rel="noreferrer"
            >
              <SiFreelancer />
            </a>
          </div>
        </header>
        <IconContext.Provider value={{ color: "#a8a9b4", size: "1.3rem" }}>
          <nav className={classes.list}>
            <ul>
              {icons.map((icon) => (
                <li key={icon.id}>
                  <Link
                    to={icon.link}
                    spy={true}
                    smooth={true}
                    offset={-7}
                    duration={1500}
                    onClick={sidebarHandler}
                    style={{ cursor: "pointer", textDecoration: "none" }}
                  >
                    {icon.name}
                    <span>{icon.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </IconContext.Provider>
        <footer className={classes.footer}>
          Copyright AH <br />
          <span>
            Designed By <span style={{ color: "#00a6eb" }}>Hussain</span>
          </span>
        </footer>
      </nav>
    </>
  );
};

export default MobileSideBar;
