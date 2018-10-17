import { Component } from 'inferno';
import './registerServiceWorker';
import './App.css';
import algoliasearch from 'algoliasearch';

// Components Import
import Header from './components/Header.jsx';
import DisplayResults from './components/DisplayResults.jsx';

// Algolia Setup
const client = algoliasearch('BK57KIK2XC', '3d5d678b5361ffcf1c321a99f884a67a');
const index = client.initIndex('apps');
const ascIndex = client.initIndex('app_rank_asc');

class App extends Component {
	state = {
		apps: [],
		category: '',
		appName: ''
	}

	// Default search
	handleSearch(appName, category){
		index.search({
			query: appName,
			hitsPerPage: 30,
			facetFilters: [ `category: ${category}` ]
		}, (err, content) => {
			if(err) throw err;
			const apps = content.hits;
			this.setState({apps});
		});
	}

	// Ascendant search
	handleSearchAsc(appName, category){
		ascIndex.search({
			query: appName,
			hitsPerPage: 30,
			facetFilters: [ `category: ${category}` ]
		}, (err, content) => {
			if(err) throw err;
			const apps = content.hits;
			this.setState({apps});
		});
	}

	// Handle Input Change
	handleChange = appName => {
		this.setState({appName});
		this.handleSearch(appName, this.state.category);
	}

	// Handle Category Selection
	handleSelectChange = category => {
		this.setState({category: category});
		this.handleSearch(this.state.appName, category);
	}

	// Handle Rank Sort
	handleSort = sort => {
		if(sort === 'asc'){
			this.handleSearchAsc(this.state.appName, this.state.category);
		} else {
			this.handleSearch(this.state.appName, this.state.category);
		}
	}

	componentDidMount(){
		this.handleSearch('', '');
	}

	render() {
		return (
			<div className="App">
				<Header onHandleSort={this.handleSort} onHandleSelect={this.handleSelectChange} onHandleSearch={this.handleChange} />
				<DisplayResults apps={this.state.apps}/>
			</div>
		);
	}
}

export default App;
