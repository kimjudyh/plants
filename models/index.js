const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/plants';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected successfully to plants db');
  })
  .catch((err) => {
    console.log(`A MongoDB connection error occured: ${err}`);
  })

// EXPORT
module.exports = {
  Plant: require('./Plant')
}