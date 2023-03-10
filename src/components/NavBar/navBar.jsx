import React from "react";
import { Link } from 'react-router-dom';

import './navbar.css';

const NavBar = () => {
    return (
        <div>
            <nav className='navbar'>
                <Link to ="/">Home </Link>
                <Link to ="/Adder">Adder </Link>
                <Link to ="/Interpolation">Interpolation </Link>
                <Link to ="/Rendering">Rendering </Link>
                <Link to ="/Lektion3">lektion3 </Link>
            </nav>
        </div>
    )
}
export default NavBar;
