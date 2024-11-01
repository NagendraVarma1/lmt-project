import Navbar from "../Navbar/Navbar";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.mainDiv}>
      <Navbar />
      <div className={classes.wrapper}>
        <h1>ABOUT US</h1>
      </div>
    </div>
  );
};

export default About;
