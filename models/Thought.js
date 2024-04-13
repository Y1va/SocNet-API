const { Schema, model, Types } = require('mongoose');

// Define reaction schema
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAt) => {
        return new Date(createdAt).toLocaleString();
      }
    }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// Define thought schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      // Set default value to the current timestamp
      default: Date.now,
      // getter method to format timestamp
      get: (createdAt) => {
        return new Date(createdAt).toLocaleString();
      }
    },
    username: {
      type: String,
      required: true
    },
    // Array of nested documents created with the reactionSchema
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// Creates virtual called reactionCount that retrieves the length of the thoughts reactions array
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Create the Thought model using the thoughtSchema
const Thought = model('Thought', thoughtSchema);

// Exports the Thought model
module.exports = Thought;
