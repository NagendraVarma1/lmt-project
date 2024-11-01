import Navbar from "../Navbar/Navbar"
import classes from './About.module.css';

const About = () => {
    return (
        <div className={classes.mainDiv}>
        <Navbar />
        <h1>This is About page</h1>
        </div>
        
    )
}

export default About