import Navbar from "../Navbar/Navbar";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.mainDiv}>
      <Navbar />
      <div className={classes.wrapper}>
        <h1>ABOUT US</h1>
        <div className={classes.content}>
          <h1>WHO WE ARE!</h1>
          <p>
            Welcome to our web application! We are a team of passionate
            developers dedicated to creating intuitive, responsive, and visually
            appealing web solutions. Our goal is to enhance user experiences
            through modern design and cutting-edge technology.
          </p>

          <h1>OUR MISSION</h1>
          <p>
            Our mission is to build web applications that are not only
            functional but also user-friendly and aesthetically pleasing. We
            believe in the power of simplicity and elegance in design, and we
            strive to provide seamless and enjoyable interactions for our users.
          </p>

          <h1>OUR VISION</h1>
          <p>
            We envision a world where technology enhances everyday life through
            intuitive and accessible web applications. Our commitment to
            innovation and user-centric design drives us to continuously improve
            and expand our offerings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
