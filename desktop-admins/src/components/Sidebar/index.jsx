import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserTie, faUsersCog, faChartLine, faGift } from '@fortawesome/free-solid-svg-icons';
import Confirmation from '../ConfirmationDialog';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
    const navigate = useNavigate();
    const [showLogoutDialog, setShowLogoutDialog] = useState(false);

    function handleLogoutClick(){
        setShowLogoutDialog(true);
    }

    function handleLogoutCancel() {
        setShowLogoutDialog(false);
    }

    const handleLogout = () => {

        const token = localStorage.getItem("token");
        
        localStorage.clear();
        
        const logout = {
          method: 'POST',
          url: 'http://192.168.1.6:8000/api/v0.0.1/logout/',
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
        <aside className='sidebar'>
            <img src={logo} alt="logo" className="logo"></img>
            <div className='items'>
            <div className='sidebar-links'>
                <div className='category'>
                    <Link to="/view_users" className='link'><FontAwesomeIcon icon={faUser} className="faicon" /><span>Users Accounts</span></Link>
                </div>
                <div className='category'>
                    <Link to="/view_specialists" className='link'><FontAwesomeIcon icon={faUserTie} className="faicon" /><span>Specialists Managment</span></Link>
                </div>
                <div className='category'>
                    <Link to="/community" className='link'><FontAwesomeIcon icon={faUsersCog} className="faicon" /><span>Community Moderation</span></Link>
                </div>
                <div className='category'>
                    <Link href="#" className='link'><FontAwesomeIcon icon={faGift} className="faicon" /><span>Rewards Managment</span></Link>
                </div>
            </div>
            </div>
            <div className='logout'>
                    <Link href="#" className='link1' onClick={handleLogoutClick}><span>Logout</span></Link>
            </div>
            {showLogoutDialog && (
                <div className="add-form-backdrop">
                            <Confirmation
                            message="Are you sure you want to logout?"
                            onCancel={handleLogoutCancel}
                            onConfirm={handleLogout}
                            /></div>)}
        </aside>
    );
};

export default Sidebar