const express = require('express');
const router = express.Router();

// Add object to Index
router.post('/', (req, res) => {
	index.addObject(newApp, (err, content) => {
		if(err) throw err;
		console.log(`objectID = ${content.objectID}`);
	});
});

// Delete object from Index using ID
router.delete('/:id', (req, res) => {
	index.deleteObject(req.params.id, (err, content) => {
		if(err) throw err;
		console.log(content);
	});
});

module.exports = router;