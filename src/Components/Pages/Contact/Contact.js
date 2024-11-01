import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Contact.module.css";

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const formSubmitHandler = (event) => {
    event.preventDefault();

    alert('Form submitted successfully. Thank You!')
    setEmail('');
    setName('')
    setPhone('')
  }
  return (
    <div className={classes.mainDiv}>
      <Navbar />
      <div className={classes.wrapper}>
        <h1>CONTACT US</h1>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.inputBox}>
            <label  htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Type Your Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={classes.inputBox}>
          <label  htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Type your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={classes.inputBox}>
          <label  htmlFor="phone">Phone Number:</label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Type your Phone Number"
              pattern="[0-9]{10}"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className={classes.btn}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
