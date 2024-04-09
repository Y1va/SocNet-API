// Importing the express module
const express = require('express');

// Importing the mongoDB database connection from the ./config/connection file
const db = require('./config/connection');

// Importing the routes from the ./routes file
const routes = require('./routes');

// Defining the port number
const PORT = process.env.PORT || 3001;

// Creating an express application instance
const app = express();

// Middleware for parsing incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Using the routes imported from ./routes
app.use(routes);

// Once the database connection is open, start the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server is now running on port ${PORT}`);
  });
});
