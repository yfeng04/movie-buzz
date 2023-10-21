import React from "react";
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import logo from '../images/logo.png';

function Header() {
    
    return (
        <header>
            <Link to='/'><img className="logo" src={logo} alt="Site Logo" /></Link>
            <div className='nav-bar'>
                <MobileNavigation />
                <Navigation />
            </div>
        </header>
    )
}

export default Header;
