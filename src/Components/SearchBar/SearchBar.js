import React, { useState } from 'react';
import './SearchBar.scss'
import { NavLink, useLocation } from 'react-router-dom';

const SearchBar = (props) => {
    const currentPath = useLocation().pathname;
    console.log(currentPath)

	return (
	<form className="searchContainer" action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Movies</span>
        </label>
        <NavLink to='/search'><img className="icon" src="https://www.svgrepo.com/show/146074/magnifying-glass.svg"/></NavLink>
        <input
            className={ currentPath === '/search' ? 'searchBar show' : 'searchBar' }
            type="text"
            id="header-search"
            placeholder="Search..."
			onChange={props.handleChange}
            autoComplete="off"
        />
    </form>
	)
}

export default SearchBar;