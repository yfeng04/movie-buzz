import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';


const NavBar = () => {
    return (
        <div className='nav-bar'>
            <MobileNavigation />
            <Navigation />
        </div>
    );
}

export default NavBar;
