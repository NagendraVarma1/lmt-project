import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { GoGraph } from "react-icons/go";
import { IoMdCall } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.brand}>APPZEST</h2>
      <nav className={classes.navbar}>
        <ul className={classes.links}>
          <li>
          
            <NavLink className={classes.link} to="/analytics"><GoGraph className={classes.icon} /> ANALYTICS</NavLink>
          </li>
          <li>
            <NavLink className={classes.link} to="/contact"><IoMdCall className={classes.icon} /> CONTACT US</NavLink>
          </li>
          <li>
            <NavLink className={classes.link} to="/about"><CiGlobe className={classes.icon} /> ABOUT US</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
