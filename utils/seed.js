// Import necessary modules
const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts } = require('./data');

// Function to seed the database
async function seedDataBase() {
  try {
    // Connect to MongoDB
    await connection;

    // Clear existing data
    await User.deleteMany();
    await Thought.deleteMany();

    // Seed the users
    const seedUsers = await User.insertMany(users);

    // Associate thoughts with users
    const thoughtsWithUsers = thoughts.map((thought) => {
      const user = seedUsers.find((user) => user.username === thought.username);
      thought.userId = user._id;
      return thought;
    });

    // Seed the thoughts
    await Thought.insertMany(thoughtsWithUsers);



    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error whilst seeding database', err);
  } finally {
    // Disconnect from MongoDB
    await connection.close();
  }
}

// Call the function to seed the database
seedDataBase();
