import { useEffect } from "react";

import Media from "react-media";

import Aos from "aos";
import "aos/dist/aos.css";

import Sidebar from "./Header/Sidebar";
import AboutMe from "./Content/AboutMe";

import MobileSideBar from './Mobile/MobileSideBar'

import Intro from "../Components/Content/Intro";

import classes from "./Main.module.css";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Media query="(max-width: 964px)">
        {(matches) => {
          return (
            <>
              {matches ? (
                <>
                  <div className={classes["grid-container-mobile"]}>
                    <div className={classes["grid-item"]} id="home">
                      <MobileSideBar />
                      <AboutMe />
                      <Intro />
                    </div>
                  </div>
                </>
              ) : (
                <div className={classes["grid-container"]}>
                  <div className={classes["grid-item-1"]}>
                    <Sidebar />
                  </div>
                  <div className={classes["grid-item-2"]} id="home">
                    <AboutMe />
                    <Intro />
                  </div>
                </div>
              )}
            </>
          );
        }}
      </Media>
    </>
  );
};

export default Main;
