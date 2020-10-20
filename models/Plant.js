// IMPORT
const mongoose = require('mongoose');

// SCHEMA
const PlantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  wateringSchedule: {
    type: String,
    required: true,
  }
}, {timestamps: true});

// CREATE MODEL
const Plant = mongoose.model('Plant', PlantSchema);

// EXPORT
module.exports = Plant;