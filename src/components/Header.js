import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function Header() {
    
    return (
        <header>
            <h1><Link to='/'>Movie Buzz</Link></h1>
            <NavBar />
        </header>
    )
}

export default Header;
