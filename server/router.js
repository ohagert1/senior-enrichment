const router = require('express').Router();
const apiRouter = require('./api/index')

router.use('/api', apiRouter);

router.get('/', (req, res, next) => {
  res.send('home page!');
});

module.exports = router;
