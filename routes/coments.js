const express = require('express');
const router = express.Router();
const coments = require('../services/coments');

/* GET coments. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await coments.getMultiple(req.query.page));
    
  } catch (err) {
    console.error(`Error while getting coments `, err.message);
    next(err);
  }
});

/* POST coments */
router.post('/', async function(req, res, next) {
  try {
    res.json(await coments.create(req.body));
  } catch (err) {
    console.error(`Error while creating coments`, err.message);
    next(err);
  }
});

/* PUT coments */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await coments.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating coments`, err.message);
    next(err);
  }
});

/* DELETE coments */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await coments.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting coments`, err.message);
    next(err);
  }
});


module.exports = router;