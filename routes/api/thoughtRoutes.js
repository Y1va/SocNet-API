const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// Routes for /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// Routes for /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// Routes for /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

// Routes for /api/thoughts/:thoughtId/reactions/reactionId
router.route(':thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
