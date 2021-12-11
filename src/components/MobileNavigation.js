import NavMain from './NavMain';
import {useState} from 'react';

const MobileNavigation = () => {

    const [open, setOpen]= useState(false);

    const hamburger = <i onClick={()=> setOpen(!open)} className="fas fa-bars hamburger"></i>
    const closeicon = <i onClick={()=> setOpen(!open)} className="fas fa-times closeicon"></i>
    
    const closeMenu = () => {
        setOpen(!open);
    }
    
    return (
        <nav className='mobile-navigation'>
            {open ? closeicon : hamburger}
            {open && <NavMain closeMenu = {closeMenu}/>}
        </nav>
    );
}

export default MobileNavigation;
