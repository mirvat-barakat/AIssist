import React, { useState }  from "react";
import  "./styles.css";
import logo from '../../assets/images/Logo.png';
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Login =()=> {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 8 || !/[A-Z]/.test(value) || !/\d/.test(value) ||
      !/[!@#$%^&*()_+={}\[\]:;<>?,./~\-]/.test(value)) {
      setPasswordError(
        'Password must be at least 8 characters'
      );
    }
  };

  const HandleFormSubmit = (e) => {
    const navigate = useNavigate();
    e.preventDefault();
    axios.post('http://localhost:8000/api/v0.0.1/login', {
      email: email,
      password: password
    }, {
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
      }
    })
      .then(response => {
        console.log(response);
        if ( response.data.user.is_admin == 1) {
          navigate("/admin");
          window.localStorage.setItem('token', response.data.authorization.token);
        }
        else{
          alert("Incorrect Credentials");

        }
      })
      .catch(error => {
        console.error(error);
      });
  };

    return(
    <div className="login-block">
      <img src={logo} alt="logo" className="logo1"></img>
      <form className="form">
        <h2 className="title">LOGIN</h2>
        <div className="form-group1">
          <label htmlFor="email" className="input-label">Email:</label>
          <input type="email" id="email" name="email" className="input-login"
                  value={email}  onChange={handleEmailChange} autoComplete="off" required />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="input-label">Password:</label>
          <input type="password" id="password" name="password"
                  value={password} className="input-login" onChange={handlePasswordChange} autoComplete="off" required/>
          {<div className="error">{passwordError}</div>}
        </div>
        <button type="submit" className="button1" onClick={HandleFormSubmit}>LOGIN</button>
      </form>
    </div>
    );
};

export default Login;