'use strict';

const studentRouter = require('express').Router();
const db = require('../db/models');
const Students = db.Students;
const Campuses = db.Campuses;
studentRouter.get('/', (req, res, next) => {
  Students.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

studentRouter.post('/', (req, res, next) => {
  console.log(req.body);
  let student = Students.build(req.body.newStudent);
  student.setCampus(req.body.campus, { save: false });
  student.save()
    .then(student => res.json(student))
    .catch(next);
});

studentRouter.get('/:id', (req, res, next) => {
  Students.findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch(next);
});

studentRouter.put('/', (req, res, next) => {
  Students.update(req.body, {
    where: {id: req.body.id},
    returning: true,
    plain: true
  })
  .spread((rows, student) => res.json(student))
  .catch(next);
});

studentRouter.delete('/', (req, res, next) => {
  Students.findById(req.body.id)
  .then((student) => {
    return Students.destroy({where: {id: req.body.id}})
    .then(() => res.send('Deleted'));
  })
  .catch(next);
});

module.exports = studentRouter;
