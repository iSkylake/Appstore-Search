const algoliasearch = require('algoliasearch');

const adminKey = require('../apiKey.js');
const client = algoliasearch('BK57KIK2XC', process.env.apiAdminKey || adminKey); // ENV Variable
const index = client.initIndex('apps');

// Add object to Index
exports.create = (req, res) => {
	const newApp = req.body;
	index.addObject(newApp, (err, content) => {
		if(err) throw err;
		res.send(`objectID = ${content.objectID}`);
	});
}

// Delete object from Index using ID
exports.destroy = (req, res) => {
	index.deleteObject(req.params.id, (err, content) => {
		if(err) throw err;
		console.log(content);
		res.send(content);
	});
}
