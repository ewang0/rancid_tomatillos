import React from 'react';
import './Nav.scss';

const Nav = () => {
    return (
        <nav>
            <h1>RANCID TOMATILLOS</h1>
            <div className="nav-links">
                <button>HOME</button>
                <button>ABOUT</button>
            </div>
        </nav>
    )
}

export default Nav;