const CategoryDropDown = props => {
	
	const handleChange = e => {
		props.onHandleSelect(e.target.value);
	}

	return(
		<select className="category-dropdown" onChange={handleChange}>
			<option value="">Category</option>
			<option value="Books">Books</option>
			<option value="Business">Business</option>
			<option value="Catalogs">Catalogs</option>
			<option value="Education">Education</option>
			<option value="Entertainment">Entertainment</option>
			<option value="Finance">Finance</option>
			<option value="Games">Games</option>
			<option value="Health & Fitness">Health & Fitness</option>
			<option value="Medical">Medical</option>
			<option value="Music">Music</option>
			<option value="Navigation">Navigation</option>
			<option value="News">News</option>
			<option value="Newsstand">Newsstand</option>
			<option value="Photo & Video">Photo & Video</option>
			<option value="Productivity">Productivity</option>
			<option value="Reference">Reference</option>
			<option value="Social Networking">Social Networking</option>
			<option value="Sport">Sport</option>
			<option value="Travel">Travel</option>
		</select>
	)
}

export default CategoryDropDown;