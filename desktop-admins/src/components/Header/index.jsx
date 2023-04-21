import React from 'react';
import AppButton from "../../Button";
import "./style.css";

const Header = () => {
    return (
        <header >
          <nav className='navbar'>
            <div ><h1>Admin Pannel</h1></div>
            <AppButton button_name="Logout" />
          </nav>
        </header>
      );
};
export default Header;