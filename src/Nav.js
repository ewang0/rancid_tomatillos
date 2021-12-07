import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <h1>RANCID TOMATILLOS</h1>
            <div className="nav-links">
                <NavLink to="/"><button>HOME</button></NavLink>
                <NavLink to="/about"><button>ABOUT</button></NavLink>
            </div>
        </nav>
    )
}

export default Nav;