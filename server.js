// IMPORTS
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

// VIEW ENGINE
app.set('view engine', 'ejs');

// MODELS
// move to controller later
const db = require('./models');
console.log('connected to plant db')

// CONTROLLERS
const plantsController = require('./controllers/plantsController');

// MIDDLEWARE
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));

// custom middleware to display each request
app.use((req, res, next) => {
  console.log(`Request received: ${req.url}`);
  next();
})

// ROUTES
// root route
app.get('/', (req, res) => {
  res.send('<h1>Plants Homepage!</h1>');
})

// plants routes
app.use('/plants', plantsController);

// SERVER LISTENER
app.listen(4500, () => {
  console.log('Server running on port 4500');
})

