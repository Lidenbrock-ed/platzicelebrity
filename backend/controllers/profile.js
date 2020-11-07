const express = require('express');
const router = express.Router();
const profileModel = require('../models/profile')

router.get('/:id', async function(req, res) {
    const id = req.params.id
    const result = await profileModel.query(id);
    res.status(200)
          .json(result);
  
  });
  
  router.get('/:id/follow/celebrities', async function(req, res) {
    const id = req.params.id
    const result = await profileModel.followCelebrities(id);
    res.status(200)
          .json(result);
  
  });
  router.get('/:id/follow/bookmarks', async function(req, res) {
    const id = req.params.id
    const result = await profileModel.bookMarkets(id);
    res.status(200)
          .json(result);
  
  });
  
  module.exports = router;