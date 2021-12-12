import React, { useState } from 'react';
import './SearchBar.scss'
import { NavLink, useLocation } from 'react-router-dom';

const SearchBar = (props) => {
    const currentPath = useLocation().pathname === '/' ? '/search' : '/'

	return (
	<form className="searchContainer" action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Movies</span>
        </label>
        <NavLink to={ currentPath }><img className="icon" src="./search.svg"/></NavLink>
        <input
            className={ currentPath === '/' ? 'searchBar show' : 'searchBar' }
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