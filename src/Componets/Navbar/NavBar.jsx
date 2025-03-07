import React from 'react';
import './NavBar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import searchIcon from '../../assets/search.png';
import upload from '../../assets/upload.png';
import more from '../../assets/more.png';
import notification from '../../assets/notification.png';
import profile from '../../assets/jack.png';
import { Link } from 'react-router-dom';

const NavBar = ({setSidebar}) => (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img src={menu_icon} className='menu-icon' alt="Menu"  onClick={()=>setSidebar(prev=>prev===false?true:false)}/>
           
           <Link to='/'> <img src={logo} alt="Logo"  className='logo'/></Link> 
        </div>
        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
            <input type="text" placeholder='Search' />
            <img src={searchIcon} alt="Search" />

            </div>
            
        </div>
        <div className="nav-right flex-div">
            <img src={upload} alt="Upload" />
            <img src={more} alt="More" />
            <img src={notification} alt="Notifications" />
            <img src={profile} alt="Profile" className='user-icon' />
        </div>
    </nav>
);

export default NavBar;
