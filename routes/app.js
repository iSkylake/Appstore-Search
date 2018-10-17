const express = require('express');
const router = express.Router();
const algoliasearch = require('algoliasearch');

const client = algoliasearch('BK57KIK2XC', process.env.apiAdminKey); // ENV Variable
const index = client.initIndex('apps');

// Add object to Index
router.post('/', (req, res) => {
	newApp = req.body;
	index.addObject(newApp, (err, content) => {
		if(err) throw err;
		console.log(`objectID = ${content.objectID}`);
		res.send(`objectID = ${content.objectID}`);
	});
});

// Delete object from Index using ID
router.delete('/:id', (req, res) => {
	index.deleteObject(req.params.id, (err, content) => {
		if(err) throw err;
		console.log(content);
		res.send(content);
	});
});

module.exports = router;