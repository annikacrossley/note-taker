const express = require('express');

//import routes
const apiRoutes = require('./api-routes');
const exp = require('constants');

const app = express();

app.use('/api-routes', apiRoutes);

module.exports = app;