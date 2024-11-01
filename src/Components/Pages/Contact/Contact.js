import Navbar from "../Navbar/Navbar";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.mainDiv}>
      <Navbar />
      <div className={classes.wrapper}>
        <h1>CONTACT US</h1>
      </div>
    </div>
  );
};

export default Contact;
