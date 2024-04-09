// Importing required modules from mongoose library
const { connect, connection } = require('mongoose');


// Defining the connection string for MongoDB
const connectionString = 'mongodb://127.0.0.1:27017/usersDB';


// Establishing the connection to the MongoDB databse using the connection string
connect(connectionString);


// Exporting the connection object for external use
module.exports = connection;
