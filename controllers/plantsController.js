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

    // console.log(allPlants);

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

// DYNAMIC ROUTES
// Show route
router.get('/:id', async (req, res) => {
  try {
    const foundPlant = await db.Plant.findById(req.params.id);
    console.log(foundPlant.name)
    res.render('show', {
      plant: foundPlant,
      id: req.params.id,
      title: `${foundPlant.name} Details`,
    }) 
  } catch (err) {
      res.send(err);
    }
})

// GET edit route
router.get('/:id/edit', async (req, res) => {
  try {
    const foundPlant = await db.Plant.findById(req.params.id);
    res.render('edit', {
      plant: foundPlant,
      id: req.params.id,
      title: `Edit ${foundPlant.name}`
    })

  } catch (err) {
    res.send(err);
  }
})

// PUT update route
router.put('/:id', async (req, res) => {
  try {
    const updatedPlant = await db.Plant.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true},
    )
    res.redirect(`/plants`)

  } catch (err) {
    res.send(err);
  }
})

// EXPORT
module.exports = router;