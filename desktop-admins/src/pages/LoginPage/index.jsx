import React from "react";
import  "./styles.css";
import logo from '../../assets/images/Logo.png';

const Login =()=> {

    return(
    <div className="login-block">
      <img src={logo} alt="logo" className="logo"></img>
      <form className="form">
        <h2 className="title">LOGIN</h2>
        <div className="form-group">
          <label htmlFor="email" className="input-label">Email:</label>
          <input type="email" id="email" name="email" className="input" autoComplete="off" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="input-label">Password:</label>
          <input type="password" id="password" name="password"  className="input" autoComplete="off" />
        </div>
        <button type="submit" className="button">LOGIN</button>
      </form>
    </div>
    );
};

export default Login;