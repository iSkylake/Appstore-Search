const SearchInput = props => {

	const handleInput = e => {
		props.onHandleSearch(e.target.value);
	}

	return (
		<input className="search-input" onInput={ handleInput } type="text" placeholder="Search App"/>
	)
}

export default SearchInput;