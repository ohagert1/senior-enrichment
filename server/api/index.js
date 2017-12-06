'use strict';
const apiRouter = require('express').Router();
const db = require('../db');
const studentRouter = require('./studentRouter');
const campusRouter = require('./campusRouter');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create

apiRouter.use('/students', studentRouter);

apiRouter.use('/campuses', campusRouter);



module.exports = apiRouter;
