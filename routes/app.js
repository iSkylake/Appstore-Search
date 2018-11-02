const express = require('express');
const router = express.Router();

const appController = require('../controllers/app.js');

// Create app route
router.post('/', appController.create);

// Delete app route
router.delete('/:id', appController.destroy);

module.exports = router;