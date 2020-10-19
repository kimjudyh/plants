// IMPORTS
const express = require('express');
const router = express.Router();

// DATABASE
const db = require('../models');

// ROUTES
// INDEX
router.get('/', (req, res) => {
  db.Plant.find({}, (err, allPlants) => {
    if (err) {
      return console.log(err)
    }

    console.log(allPlants);
    res.send(allPlants)

  })
})

// CREATE

// EXPORT
module.exports = router;