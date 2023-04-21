import React, { useState }  from "react";
import  "./styles.css";
import logo from '../../assets/images/Logo.png';
import axios from "axios";


const Login =()=> {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

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

  const handleFormSubmit  = async () => {
    const data = {
      email: email,
      password: password,
    };

    const config = {
      method: "post",
      data,
      url: 'http://127.0.0.1:8000/api/v0.0.1/login',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
      },
    };
    try {
      const res = await axios(config);
      if (res.data.status == "success" && res.data.user.isadmin==1) {
        await localStorage.setItem("@token", res.data.authorisation.token);
        alert("success");
      }
    } catch (error) {
      console.error();
    }
  };

    return(
    <div className="login-block">
      <img src={logo} alt="logo" className="logo"></img>
      <form className="form">
        <h2 className="title">LOGIN</h2>
        <div className="form-group">
          <label htmlFor="email" className="input-label">Email:</label>
          <input type="email" id="email" name="email" className="input" value={email} autoComplete="off" required />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="input-label">Password:</label>
          <input type="password" id="password" name="password" value={password} className="input" onChange={handlePasswordChange} autoComplete="off" required/>
          {<div className="error">{passwordError}</div>}
        </div>
        <button type="submit" className="button" onClick={handleFormSubmit}>LOGIN</button>
      </form>
    </div>
    );
};

export default Login;