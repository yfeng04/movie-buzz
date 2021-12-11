import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import logo from '../images/logo.png';

function Header() {
    
    return (
        <header>
            <Link to='/'><img className="logo" src={logo} alt="Site Logo" /></Link>
            <NavBar />
        </header>
    )
}

export default Header;
