import React from 'react';
import AppButton from "../../Button";
import "./style.css";

const Header = () => {

    const handleLogout = () => {

        const token = localStorage.getItem("token");
        
        localStorage.clear();
        
        const logout = {
          method: 'POST',
          url: 'http://127.0.0.1:8000/api/v0.0.1/logout/',
          headers: {
            'content-type': 'application/json',
            'Accept' : 'application/json',
            'Authorization': 'bearer ' + token
          },
        };
        
        axios.request(logout)
            .then(response => {
                navigate("/");
          });
      }

      
    return (
        <header >
          <nav className='navbar'>
            <div ><h1>Admin Pannel</h1></div>
            <AppButton button_name="Logout" onClick={handleLogout} />
          </nav>
        </header>
      );
};
export default Header;