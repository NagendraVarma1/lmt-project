import { useState } from "react";
import classes from "./Register.module.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if(password.length < 6){
            setError('Password must contain atleast 6 characters')
            setPassword('');
            setConfirmPassword('')
        }
        else if(password !== confirmPassword){
            setPassword('');
            setConfirmPassword('')
            setError('Password Doesnt Match.')
        }
        else{
            setError('')
            setEmail('')
            setPassword('');
            setConfirmPassword('')

            navigate('/home')
        }
    }


  return (
    <div className={classes.mainDiv}>
      <div className={classes.wrapper}>
        <form onSubmit={formSubmitHandler}>
          <h1>Register Here</h1>
          <div className={classes.inputBox}>
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
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Type your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={classes.inputBox}>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {error && <p>{error}</p>}
          </div>
          
          <div className={classes.btn}>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
