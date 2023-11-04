const express = require('express');

//import routes
const apiRoutes = require('./api-routes');

const app = express();

app.use('/api-routes', apiRoutes);

module.exports = app;