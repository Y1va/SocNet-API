// Importing the User and Thought models
const { User, Thought } = require('../models');

// Exporting the controller object
module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      // Fetch all users from the database
      const users = await User.find();
      // Send the users as a JSON response
      res.json(users);
    } catch (err) {
      // If there is an error, log it and send a 500 error response
      console.error(err);
      res
        .status(500)
        .json({ error: 'There was a problem while getting users ' });
    }
  },

  // Get a single user by its Id
  async getSingleUser(req, res) {
    // Extracting userId from request parameters
    const { userId } = req.params;
    try {
      // Find a user in the database by their Id
      const user = await User.findOne(userId);
      if (!user) {
        return res
          .status(404)
          .json({ message: 'User not found with that ID!' });
      }
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json({ message: 'User created successfully', user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Update a user by its Id
  async updateUser(req, res) {
    const { userId } = req.params;
    const { username, email } = req.body;
    try {
      const user = await User.findOneAndUpdate(
        userId,
        { username, email },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res
          .status(404)
          .json({ message: 'Cannot update user with this ID' });
      }
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Delete user and remove thoughts associated with user
  async deleteUser(req, res) {
    const { userId } = req.params;
    try {
      // Find the user to be deleted by its Id
      const user = await User.findOneAndRemove(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found with that ID' });
      }
      // Find thoughts associated with the user
      const thoughts = await Thought.find({ username: user.username });

      if (thoughts.length > 0) {
        // If there are thoughts found, delete them
        await Thought.deleteMany({ username: user.username });
        // Sends a success message indicating user and thoughts deletion
        res.json({ message: 'User and associated thoughts successfully deleted' });
      } else {
        // If no thoughts are found, return a message saying no thoughts are found
        res.json({message:'User successfully deleted, No associated thoughts were found.' });
      }
      // Delete the user from the database
      await user.remove();
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Add Friend to users friend list
  async addFriend(req, res) {
    console.log('You are adding a friend');
    console.log(req.body);

    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.body.friendId || req.params.friendId } },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'No user found with that ID' });
      }
      res.json({ message: 'Friend added succsessfully', user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Remove Friend from users friend list
  async removeFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'No user found with that ID' });
      }
      res.json({ message: 'Friend removed succuessfully', user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};