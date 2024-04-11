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
  },

  // Update thought by its Id
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this ID' });
      }
      res.json(thought);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId
      });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      // Remove the deleted thoughts _id from the associated users thoughts array
      await User.updateMany({}, { $pull: { thoughts: thought._id } });

      res.json({ message: 'Thought deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Create a reaction for a thought
  async createReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        // Use addToSet to prevent duplicates in the reactions array
        { $addToSet: { reactions: req.body }},
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this ID' });
      }
      res.json({ message: 'Reaction added successfully', thought});
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};
