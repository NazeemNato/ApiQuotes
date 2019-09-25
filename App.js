const express = require('express');
const app = express();
const db = require('./db');

const DataController = require('./user/DataController');
app.use('/data', DataController);

module.exports = app;