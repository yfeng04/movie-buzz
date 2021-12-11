import { NavLink } from 'react-router-dom';

function NavMain(closeMenu) {
    return (
        <ul>
            <li onClick={closeMenu}><NavLink to='/' exact>Home</NavLink></li>
            <li onClick={closeMenu}><NavLink to='/about'>About</NavLink></li>
            <li onClick={closeMenu}><NavLink to='/favs'>Favourites</NavLink></li>
            <li onClick={closeMenu}><NavLink to='/search'><i className="fas fa-search search-icon"></i></NavLink></li>
        </ul>
    )
}

export default NavMain;
