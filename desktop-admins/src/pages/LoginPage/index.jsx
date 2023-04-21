import React from "react";
import  "./styles.css";
import logo from '../../assets/images/Logo.png';

const Login =()=> {

    return(
    <div className="login-block">
      <img src={logo} alt="logo"></img>
      <h2>LOGIN Here</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"  autoComplete="off" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password"   autoComplete="off" />
        </div>
        <button type="submit">LOGIN</button>
      </form>
    </div>
    );
};

export default Login;