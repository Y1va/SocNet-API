const { User, Thought } = require('../models');

// Exporting the controller object
module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      // Fetch all thoughts from the database
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Get a single thought by its Id
  async getSingleThought(req, res) {
    const { thoughtId } = req.params;
    try {
      const thought = await Thought.findOne(thoughtId);
      if (!thought) {
        return res
          .status(404)
          .json({ message: 'Thought not found with that ID' });
      }
      res.json(thought);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Create a new thought
  async createThought(req, res) {
    try {
      // Create a new thought with the request body
      const thought = await Thought.create(req.body);
      // Push the created thoughts _id to the associated user's thoughts array field
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: thought._id } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'Associated user not found' });
      }
      res.json(thought);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};
