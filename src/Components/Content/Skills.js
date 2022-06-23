import classes from "./Skills.module.css";

const skillsData1 = [
  {
    id: 1,
    name: "HTML",
    styleName: "html",
  },
  {
    id: 2,
    name: "CSS",
    styleName: "css",
  },
  {
    id: 3,
    name: "JS",
    styleName: "js",
  },
  {
    id: 4,
    name: "Python",
    styleName: "python",
  },
];

const skillsData2 = [
  {
    id: 1,
    name: "MongoDB",
    styleName: "mongo",
  },
  {
    id: 2,
    name: "Node",
    styleName: "node",
  },
  {
    id: 3,
    name: "React",
    styleName: "react",
  },
  {
    id: 4,
    name: "Next.JS",
    styleName: "nextJS",
  },
];

const Skills = () => {
  return (
    <>
      <h2 id="skills">Skills</h2>
      <p>
        I learned lot of skills and also practise that more and make some
        projects , In below I hope you like my projects . I spend more than 5000
        hours coding , I love to create a new Things and also learn New things
      </p>
      <div className={classes["skills-bar"]}>
        <div className={classes.skillsRow1} data-aos="fade-right">
          {skillsData1.map((skill) => (
            <div className={classes.bar} key={skill.id}>
              <div className={classes.info}>
                <span>{skill.name}</span>
              </div>
              <div
                className={`${classes["progress-line"]} ${
                  classes[skill.styleName]
                }`}
              >
                <span></span>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.skillsRow2} data-aos="fade-left">
          {skillsData2.map((skill) => (
            <div className={classes.bar} key={skill.id}>
              <div className={classes.info}>
                <span>{skill.name}</span>
              </div>
              <div
                className={`${classes["progress-line"]} ${
                  classes[skill.styleName]
                }`}
              >
                <span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
