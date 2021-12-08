import './search.scss'

const Search = (props) => {
	return (
	<form className="searchContainer" action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Movies</span>
        </label>
        <img className="icon" src="https://www.kindacode.com/wp-content/uploads/2020/12/search.png"/>
        <input
            className="searchBar"
            type="text"
            id="header-search"
            placeholder="Search..."
			onChange={props.handleChange}
            name="s"
        />
    </form>
	)
}

export default Search;