import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserTie, faUsersCog, faChartLine, faGift } from '@fortawesome/free-solid-svg-icons';
import Confirmation from '../ConfirmationDialog';


const Sidebar = () => {

    const [showLogoutDialog, setShowLogoutDialog] = useState(false);
    function handleLogoutClick(){
        setShowLogoutDialog(true);
    }
    function handleLogoutCancel() {
        setShowLogoutDialog(false);
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
            <div className='logout'>
                    <Link href="#" className='link' onClick={handleLogoutClick}><span>Logout</span></Link>
            </div>
            {showLogoutDialog && (
                            <Confirmation
                            message="Are you sure you want to logout?"
                            onCancel={handleLogoutCancel}
                            />)}

            </div>
        </aside>
    );
};

export default Sidebar