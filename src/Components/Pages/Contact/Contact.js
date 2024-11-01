import Navbar from "../Navbar/Navbar"
import classes from './Contact.module.css';

const Contact = () => {
    return (
        <div className={classes.mainDiv}>
            <Navbar />
            <h1>This is Contact page</h1>
        </div>
    )
}

export default Contact