'use strict';

const studentRouter = require('express').Router();
const db = require('../db/models');
const Students = db.Students;

studentRouter.get('/', (req, res, next) => {
  Students.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

studentRouter.get('/:id', (req, res, next) => {
  Students.findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch(next);
});

module.exports = studentRouter;
