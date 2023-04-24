import React from 'react';
import './styles.css';
import logo from '../../assets/images/Logo.png';

const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <img src={logo} alt="logo" className="logo"></img>
            <div className='items'>

            <div className='sidebar-links'>
            <a href="#" className='link'><span className="ml-3">Users Accounts</span></a>
            <a href="#" className='link'><span className="ml-3">Specialists Managment</span></a>
             <a href="#" className='link'><span className="ml-3">Community Moderation</span></a>
             <a href="#" className='link'> <span className="ml-3">User Data Analysis</span></a>
             <a href="#" className='link'><span className="ml-3">Rewards Managment</span></a>
            </div>
 
            </div>
        </aside>
    );
};

export default Sidebar