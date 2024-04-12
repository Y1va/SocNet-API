// Importing the router module from express which allows us to define routes for our application
const router = require('express').Router();

// Importing the api routes from the ./api file
const apiRoutes = require('./api');

// Using the api routes for requests starting with /api
router.use('/api', apiRoutes);

// Middleware to handle requests that don't match any defined routes
router.use((req, res) => res.send('Wrong Route'));

// Exporting the router to be used in other parts of the application
module.exports = router;