import classes from "./Projects.module.css";

import groceryImg from "../../../Assets/arProject.png";
import socialImg from "../../../Assets/social1.png";
import campImg from "../../../Assets/yelpcamp.png";
// import groceryImg from "../../../Assets/grocery.png";
// import socialImg from "../../../Assets/socialmedia.png";
// import campImg from "../../../Assets/camp2.png";

const Projects = () => {
  return (
    <>
      <h2 >Projects</h2>
      <p>
        Hard-working web developer with a flair for creating elegant solutions
        in the least amount of time.
      </p>

      <div className={classes.project}>
        <div className={classes.projectItem1}>
          <div data-aos="fade-right">
            <img src={groceryImg} alt="grocery" />
          </div>
          <div data-aos="fade-left"> 
            <p style={{ paddingLeft: "20px" }}>
               A customer Can order a product{" "}
              and Only admins can create, edit , delete the products and
               check the customer ordered products.{" "}
              <a
                href="https://ar-traders-adirai.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                https://ar-traders-adirai.herokuapp.com/
              </a>
            </p>
          </div>
        </div>
        <div className={classes.projectItem2}>
          <div data-aos="fade-right">
            <p style={{ paddingRight: "20px" }}>
              A User can create, like, delete ,comment a post and follow and
              unfollow a users and receive the notfication live, chat with live with help of socket.io api and
              also admin can delete anyone's post <br />{" "}
              <a
                href="https://social-media-app-adirai.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                https://social-media-app-adirai.herokuapp.com/
              </a>
            </p>
          </div>
          <div data-aos="fade-left">
            <img src={socialImg} alt="grocery2" />
          </div>
        </div>
        <div className={classes.projectItem3} data-aos="fade-right">
          <div>
            <img src={campImg} alt="grocery3" />
          </div>
          <div data-aos="fade-left">
            <p style={{ paddingLeft: "20px" }}>
              A user can create campgrounds with location of map , edit , delete
              and review the campgrounds <a rel="noreferrer" href="https://yelpcamp-adirai.herokuapp.com/" target="_blank">
            https://yelpcamp-adirai.herokuapp.com/
          </a>
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default Projects;
