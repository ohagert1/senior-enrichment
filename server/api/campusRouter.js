'use strict';

const campusRouter = require('express').Router();
const db = require('../db/models');
const Campuses = db.Campuses;
const Students = db.Students;

campusRouter.get('/', (req, res, next) => {
  Campuses.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

campusRouter.post('/', (req, res, next) => {
  console.log('req', req.body.newCampus)
  Campuses.create(req.body.newCampus)
  .then(campus => res.json(campus))
  .catch(next);
});

campusRouter.get('/:id/students', (req, res, next) => {
  Students.findAll({where: {CampusId: req.params.id}})
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

campusRouter.put('/', (req, res, next) => {
  Campuses.update(req.body, {
    where: {id: req.body.id},
    returning: true,
    plain: true
  })
  .spread((rows, campus) => res.json(campus))
  .catch(next);
});

campusRouter.delete('/', (req, res, next) => {
  Campuses.destroy({where: {id: req.body.id}})
  .catch(next);
});

module.exports = campusRouter;
