import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../images/logo.svg';


const Nav = (props) => {
    return (
        <nav>
            <NavLink to="/" className='logo'><img src={logo} alt="logo.svg"/></NavLink>
            <div className="nav-links">
                <NavLink to="/" className="nav-link">HOME</NavLink>
                <NavLink to="/about" className="nav-link">ABOUT</NavLink>
            </div>
            <SearchBar handleChange={props.handleChange}/>
        </nav>
    )
}

export default Nav;