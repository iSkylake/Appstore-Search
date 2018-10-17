import App from './App.jsx';

const DisplayResult = ({apps}) => {
	const appList = apps.map((app)=>
		<App key={app.objectID} app={app}/>
	)

	return (
		<div className="display-result">
			{appList}
		</div>
	)
}

export default DisplayResult;