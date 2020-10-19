// IMPORTS
const express = require('express');
const router = express.Router();

// DATABASE
const db = require('../models');

// ROUTES
// Index
router.get('/', (req, res) => {
  db.Plant.find({}, (err, allPlants) => {
    if (err) {
      return console.log(err)
    }

    console.log(allPlants);

    res.render('index', {
      title: 'Plants',
      plants: allPlants,
    })

  })
})

// GET new route
router.get('/new', (req, res) => {
  res.render('new', {
    title: 'New Plant'
  })
})

// POST create route
router.post('/', async (req, res) => {
  try {
    console.log('create plant req.body', req.body)
    const newPlant = await db.Plant.create(req.body);
    res.redirect('/plants');
  } catch (err) {
    res.send(err);
  }
})

// EXPORT
module.exports = router;