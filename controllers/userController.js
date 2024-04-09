const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: 'There was a problem while getting users ' });
    }
  },
  // Get a single user by its id
  async getSingleUser(req, res) {
    const { userId } = req.params;
    try {
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
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Update a user by its id
  async updateUser(req, res) {
    const { userId } = req.params;
    const { username, email } = req.body;
    try {
      const user = await User.findOneAndUpdate(
        userId,
        { username, email },
        { runValidators: true, new: true }
      );
      if(!user) {
        return res.status(404).json({ message: 'Cannot update user with this ID'})
      }
      res.json(user)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: 'Internal Server Error'})
    }
  }
};
