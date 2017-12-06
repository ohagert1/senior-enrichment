'use strict';

const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const router = require('./router.js');

const app = express();

//logging middleware
app.use(volleyball);

//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//static middleware
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', router); // include our routes!

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
  next();
}); // Send index.html for any other requests

//error handling middleware
app.use((err, req, res, next) => {
  console.log('error??');
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;
