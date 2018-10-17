const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const appRoutes = require('./routes/app.js');

app.use('/api/1/apps', appRoutes);

// Production only
if (process.env.NODE_ENV === 'production') {
	// Serve any static files
	app.use(express.static(path.join(__dirname, 'client/build')));
	// Handle routing, return all requests to React app
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}


app.listen(port, () => console.log(`Listening on port ${port}`));