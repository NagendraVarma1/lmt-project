import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.brand}>APPZEST</h1>
      <nav className={classes.navbar}>
        <ul className={classes.links}>
          <li>
            <NavLink className={classes.link} to="/analysis">ANALYSIS</NavLink>
          </li>
          <li>
            <NavLink className={classes.link} to="/contact">CONTACT US</NavLink>
          </li>
          <li>
            <NavLink className={classes.link} to="/about">ABOUT US</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
