import './search.scss'

const Search = (props) => {
	return (
	<form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Movies</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search movies"
			onChange={props.handleChange}
            name="s" 
        />
    </form>
	)
}

export default Search;