import Typical from "react-typical";

import classes from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <>
      <main className={classes.aboutMe}>
        <div className={classes.content}>
          <div className={classes.name}> Ahamed Hussain</div>
          <div className={classes.skill}> I'm<span>
            <Typical
              loop={Infinity}
              steps={[
                "Full Stack Developer",
                4000,
                "MERN Stack Dev",
                4000,
                "React And Next.JS Dev",
                4000,
                "Developer",
                4000,
              ]}
            />
            </span>
          </div>

        </div>
      </main>
    </>
  );
};

export default AboutMe;
