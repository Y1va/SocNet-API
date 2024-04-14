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
      // Map each thought to its corresponding user
      // Find the user associated with the thought
      const user = seedUsers.find((user) => user.username === thought.username);
      // Assign the user's _id to the thoughts userId field
      thought.userId = user._id;
      return thought;
    });

    // Seed the thoughts
    await Thought.insertMany(thoughtsWithUsers);

    // Seed the reactions for each thought
    for (const thought of seedThoughts) {
      // Iterate over each thought
      const reactions = thought.reactions.map((reaction) => {
        // Map each reaction to its corresponding user
        const user = seedUsers.find(
          (user) => user.username === reaction.username
        );
        return {
          // Copy the reaction body
          reactionBody: reaction.reactionBody,
          // Assign the users _id to the reactions username field
          username: user._id
        };
      });
      // Update the thought's reactions with the mapped reactions
      thought.reactions = reactions
      // Save the modified thought back to the database
      await thought.save()
    }

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
