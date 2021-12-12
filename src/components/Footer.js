import { Link } from 'react-router-dom';
import logo from '../images/logo-cropped.png';

function Footer() {
    return (
        <footer >
            <Link to='/'><img className="logo" src={logo} alt="Site Logo" /></Link>

            <div className='footer-text'>
                <p>&copy; {new Date().getFullYear()} Movie Buzz </p>
                <p>Author: Yingying Feng</p>
            </div>
        
        </footer>
    )
}

export default Footer;
