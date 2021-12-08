import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <h1>Rancid Tomatillos</h1>
            <div className="nav-links">
                <NavLink to="/" className="nav-link">HOME</NavLink>
                <NavLink to="/about" className="nav-link">ABOUT</NavLink>
            </div>
        </nav>
    )
}

export default Nav;