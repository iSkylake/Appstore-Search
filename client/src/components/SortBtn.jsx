const SortBtn = props => {

	const handleClick = e => {
		props.onHandleSort(e.target.value);
	}

	return(
		<div className="sort-wrap">
			<button className="btn-sort" onClick={ handleClick } value="desc" title="Descendant Sort">&darr;</button>
			<button className="btn-sort" onClick={ handleClick } value="asc" title="Ascendant Sort">&uarr;</button>
		</div>
	)
}

export default SortBtn;