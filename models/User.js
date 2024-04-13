const { Schema, model, Types } = require('mongoose');

// Define user schema
const userSchema = new Schema(
  {
    // Field for the username
    username: {
      type: String,
      unique: true,
      required: true,
      // Trims whitespace from the username
      trim: true
    },
    // Field for the email
    email: {
      type: String,
      required: true,
      unique: true,
      // Built in validation for email using Regex
      validate: {
        validator: function (v) {
          return /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
        },
        // Custom error message for invalid email
        message: (props) => `${props.value} is not a valid email address!`
      }
    },
    // Field for storing the IDs of thoughts associated with the user
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      }
    ],
    // Field for storing the IDs of other users (friends) associated with the user
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Create the User model using the userSchema
const User = model('User', userSchema);

// Export the User model
module.exports = User;
