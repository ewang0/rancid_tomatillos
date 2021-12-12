import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';


const Nav = (props) => {
    return (
        <nav>
            <img src="./logo.svg"/>
            <div className="nav-links">
                <NavLink to="/" className="nav-link">HOME</NavLink>
                <NavLink to="/about" className="nav-link">ABOUT</NavLink>
            </div>
            <SearchBar handleChange={props.handleChange}/>
        </nav>
    )
}

export default Nav;