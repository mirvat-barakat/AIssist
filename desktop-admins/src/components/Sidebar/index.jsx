import React from 'react';
import './styles.css';
import logo from '../../assets/images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserTie, faUsersCog, faChartLine, faGift } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <img src={logo} alt="logo" className="logo"></img>
            <div className='items'>
            <div className='sidebar-links'>
                <div>
                    <a href="#" className='link'><FontAwesomeIcon icon={faUser} className="faicon" /><span className="ml-3">Users Accounts</span></a>
                </div>
                <div className='category'>
                    <a href="#" className='link'><FontAwesomeIcon icon={faUserTie} className="faicon" /><span className="ml-3">Specialists Managment</span></a>
                </div>
                <div className='category'>
                    <a href="#" className='link'><FontAwesomeIcon icon={faUsersCog} className="faicon" /><span className="ml-3">Community Moderation</span></a>
                </div>
                <div className='category'>
                    <a href="#" className='link'><FontAwesomeIcon icon={faChartLine} className="faicon" /> <span className="ml-3">User Data Analysis</span></a>
                </div>
                <div className='category'>
                    <a href="#" className='link'><FontAwesomeIcon icon={faGift} className="faicon" /><span className="ml-3">Rewards Managment</span></a>
                </div>
            </div>
            </div>
        </aside>
    );
};

export default Sidebar