import { FaAngleRight } from "react-icons/fa";
import { IconContext } from "react-icons";

import Skills from "./Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

import classes from "./Intro.module.css";
import photo from "../../Assets/free1.png";
import qualifiPhoto from "../../Assets/qualification.png";

const educationsDetails1 = [
  {
    id: 1,
    name: "H.S.C",
    duration: "2017-2019",
    destination: "khadir mohideen boys school",
    native: "adirampattinam-614701",
  },
  {
    id: 2,
    name: "Python Bootcamp",
    duration: "6 months",
    destination: "Online(udemy)",
  },
  {
    id: 3,
    name: "React Bootcamp",
    duration: "6 months",
    destination: "Online(udemy)",
  },
];
const educationsDetails2 = [
  {
    id: 4,
    name: "B.C.A",
    duration: "2019-2022",
    destination: "khadir mohideen college",
    native: "adirampattinam-614701",
  },
  {
    id: 5,
    name: "Full stack Dev",
    duration: "2020-2021",
    destination: "Online(udemy)",
  },
  {
    id: 6,
    name: "MERN stack",
    duration: "2 months",
    destination: "Online(udemy)",
  },
];

const Intro = () => {
  return (
    <>
      <div className={classes.intro} id="about">
        <h2>About</h2>

        <p>
          Self-motivated team player with year of experience seeking a position
          as a lead web developer with Next Generation Web Development where I
          can apply my advanced knowledge of web design with my leadership
          abilities to meet client needs and exceed their expectations
        </p>
        <div className={classes.photoAndBio}>
          <div data-aos="fade-right">
            <img src={photo} alt="My face" />
          </div>
          <div data-aos="fade-left">
            <h2>Bio</h2>
            <p>
              Web developer professional with year of experience writing,
              reviewing and fixing code aiming for a position , where I
              contribute to a dynamic and growing IT team.
            </p>
            <IconContext.Provider value={{ color: "#00a6eb", size: "1rem" }}>
              <div className={classes.bio}>
                <ul>
                  <li>
                    <FaAngleRight />
                    <span>Degree:</span> BCA
                  </li>
                  <li>
                    <FaAngleRight />
                    <span>Age:</span> 20
                  </li>
                  <li>
                    <FaAngleRight />
                    <span>City:</span> Adirai,TN
                  </li>
                </ul>

                <ul>
                  <li>
                    <FaAngleRight />
                    <span>Birthday:</span> 19 Aug 2002
                  </li>
                  <li>
                    <FaAngleRight />
                    <span>Phone:</span> +91 9790640540
                  </li>

                  <li>
                    <FaAngleRight />
                    <span>Freelancer:</span> Available
                  </li>
                </ul>
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <div className={classes.education}>
          <h2>Education</h2>
          <div className={classes.qualification}>
            <div className={classes.qualificationItem} data-aos="fade-right">
              <div>
                {educationsDetails1.map((item) => (
                  <div className={classes.listDesign} key={item.id}>
                    <h3>{item.name}</h3>
                    <div>{item.duration}</div>
                    <p>
                      {item.destination} <br />
                      {item.native && item.native}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                {educationsDetails2.map((item) => (
                  <div className={classes.listDesign} key={item.id}>
                    <h3>{item.name}</h3>
                    <div>{item.duration}</div>
                    <p>
                      {item.destination} <br />
                      {item.native && item.native}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left">
              <img src={qualifiPhoto}  alt="qualification"/>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "15px" }}>
          <Skills />
        </div>

        <div style={{ marginTop: "15px" }} id="projects">
          <Projects />
        </div>

        <div style={{ marginTop: "15px" }} id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Intro;
