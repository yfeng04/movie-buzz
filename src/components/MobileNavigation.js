import NavMain from './NavMain';
import {useState} from 'react';

const MobileNavigation = () => {

    const [open, setOpen]= useState(false);

    const hamburger = <i onClick={()=> setOpen(!open)} class="fas fa-bars hamburger"></i>
    const closeicon = <i onClick={()=> setOpen(!open)} class="fas fa-times closeicon"></i>
  
    
    return (
        <nav className='mobile-navigation'>
            {open ? closeicon : hamburger}
            {open && <NavMain />}
        </nav>
    );
}

export default MobileNavigation;
