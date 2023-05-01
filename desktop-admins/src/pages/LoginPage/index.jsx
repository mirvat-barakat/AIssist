import React, { useState }  from "react";
import  "./styles.css";
import logo from '../../assets/images/Logo.png';
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Login =()=> {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

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
        if ( response.data.user.is_admin == 1) {
          window.localStorage.setItem('token', response.data.authorization.token);
          navigate("/admin");
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
      <div className="login-page">
        <div className="login-block">
          <img src={logo} alt="logo" className="logo1"></img>
          <form>
            <div className="form-group">
              <label htmlFor="email" className="input1-label">Email:</label>
              <input type="email" id="email" name="email" className="input1-login"
                      value={email}  onChange={handleEmailChange} autoComplete="off" required />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="input1-label">Password:</label>
              <input type="password" id="password" name="password"
                      value={password} className="input1-login" onChange={handlePasswordChange} autoComplete="off" required/>
              {<div className="error">{passwordError}</div>}
            </div>
            <button type="submit" className="button1" onClick={HandleFormSubmit}>LOGIN</button>
          </form>
        </div>
      </div>
    
    );
};

export default Login;