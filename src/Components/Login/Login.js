import { useState } from 'react';
import classes from './Login.module.css'
import { useNavigate } from 'react-router-dom';
import { IoEye } from "react-icons/io5";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const validateEmail = (email) => {
    const characters = /\S+@\S+\.\S+/;
    return characters.test(email)
  }

  const showPasswordHandler = () => {
    setShowPassword((prevState) => {
      return !prevState
    })
  }

  const formHandler = (event) => {
    event.preventDefault();

    if(validateEmail(email)){
      navigate('/register')
    }
  }
  console.log(email)
  return (
    <div className={classes.mainDiv}>
      <div className={classes.wrapper}>
        <form onSubmit={formHandler}>
          <h1>Login Page</h1>
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
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="Type your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <IoEye className={classes.icon} onClick={showPasswordHandler}/>
          </div>
          <div className={classes.btn}>
            <button type='submit'>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
//SHOULD MODIFY THE STYLING FOR THE PAGE