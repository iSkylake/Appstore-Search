const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const algoliasearch = require('algoliasearch');

const app = express();
const port = process.env.PORT || 5000;

app.use(methodOverride('_method'));

// API
const client = algoliasearch('BK57KIK2XC', process.env.apiAdminKey); // ENV Variable
const index = client.initIndex('apps');

// Routes
const appRoutes = require('./routes/app.js');

app.use('/api/1/apps', appRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));