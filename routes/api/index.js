// Importing the router module from express to define routes for the application
const router = require('express').Router();

// Importing userRoutes and thoughtRoutes to handle user and thought-related routes
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Mounting userRoutes to handle requests starting with /users
router.use('/users', userRoutes);

// Mounting thoughtRoutes to handle requests starting with /thoughts
router.use('/thoughts', thoughtRoutes);

// Exporting the router to be in other parts of the application
module.exports = router;