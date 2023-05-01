import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to="/view_users" className='link'><FontAwesomeIcon icon={faUser} className="faicon" /><span>Users Accounts</span></Link>
                </div>
                <div className='category'>
                    <Link to="/view_specialists" className='link'><FontAwesomeIcon icon={faUserTie} className="faicon" /><span>Specialists Managment</span></Link>
                </div>
                <div className='category'>
                    <Link href="#" className='link'><FontAwesomeIcon icon={faUsersCog} className="faicon" /><span>Community Moderation</span></Link>
                </div>
                <div className='category'>
                    <Link href="#" className='link'><FontAwesomeIcon icon={faChartLine} className="faicon" /> <span>User Data Analysis</span></Link>
                </div>
                <div className='category'>
                    <Link href="#" className='link'><FontAwesomeIcon icon={faGift} className="faicon" /><span>Rewards Managment</span></Link>
                </div>
            </div>
            </div>
        </aside>
    );
};

export default Sidebar