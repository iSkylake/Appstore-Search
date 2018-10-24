import CategoryDropDown from './CategoryDropDown';
import SortBtn from './SortBtn';
import SearchInput from './SearchInput';

const Header = props => {
	return(
		<div className="search-wrap">
			<CategoryDropDown onHandleSelect={ category => props.onHandleSelect(category) } />
			<SearchInput onHandleSearch={ appName => props.onHandleSearch(appName) } />
			<SortBtn onHandleSort={ sort => props.onHandleSort(sort) } />
		</div>
	)
}

export default Header;