'use strict';

const campusRouter = require('express').Router();
const db = require('../db/models');
const Campuses = db.Campuses;

campusRouter.get('/', (req, res, next) => {
  Campuses.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

campusRouter.get('/:id', (req, res, next) => {
  Campuses.findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

// campusRouter.post('/', (req, res, next) => {
//   Campuses.findOrCreate()
// })

module.exports = campusRouter;
