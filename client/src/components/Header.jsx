import CategoryDropDown from './CategoryDropDown';
import SortBtn from './SortBtn';
import SearchInput from './SearchInput';

const Header = props => {

	const handleSearch = appName => {
		props.onHandleSearch(appName);
	}

	const handleSelect = category => {
		props.onHandleSelect(category);
	}

	const handleSort = sort => {
		props.onHandleSort(sort);
	}

	return(
		<div className="search-wrap">
			<CategoryDropDown onHandleSelect={ handleSelect } />
			<SearchInput onHandleSearch={ handleSearch } />
			<SortBtn onHandleSort={ handleSort } />
		</div>
	)
}

export default Header;