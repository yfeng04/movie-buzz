import React from "react";
import { NavLink } from 'react-router-dom';

function NavMain() {
    return (
        <ul>
            <li><NavLink to='/' exact>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/favs'>Favourites</NavLink></li>
            <li><NavLink to='/search'><i className="fas fa-search search-icon"></i></NavLink></li>
        </ul>
    )
}

export default NavMain;
