const SortBtn = props => {

	const handleClick = e => {
		props.onHandleSort(e.target.value);
	}

	return(
		<div className="sort-wrap">
			<button className="btn-sort" onClick={ handleClick } value="desc">&darr;</button>
			<button className="btn-sort" onClick={ handleClick } value="asc">&uarr;</button>
		</div>
	)
}

export default SortBtn;