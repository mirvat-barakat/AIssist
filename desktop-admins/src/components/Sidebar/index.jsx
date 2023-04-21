import React from 'react';
import './styles.css';
import logo from '../../assets/images/Logo.png';

const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <img src={logo} alt="logo" className="logo"></img>
            <div className='sidebar-links'>
            <a href='#' className="link" >View Users</a>
            </div>
        </aside>
    );
};

export default Sidebar