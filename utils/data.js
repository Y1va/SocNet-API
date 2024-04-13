const users = [
  {
    username: 'John Doe',
    email: 'john.doe@example.com'
  },
  {
    username: 'Alice Smith',
    email: 'alice.smith@example.com'
  },
  {
    username: 'Bob Johnson',
    email: 'bob.johnson@example.com'
  },
  {
    username: 'Emily Davis',
    email: 'emily.davis@example.com'
  },
  {
    username: 'Michael Wilson',
    email: 'michael.wilson@example.com'
  },
  {
    username: 'Emma Brown',
    email: 'emma.brown@example.com'
  },
  {
    username: 'David Lee',
    email: 'david.lee@example.com'
  },
  {
    username: 'Sophia Martinez',
    email: 'sophia.martinez@example.com'
  },
  {
    username: 'James Rodriguez',
    email: 'james.rodriguez@example.com'
  },
  {
    username: 'Olivia Taylor',
    email: 'olivia.taylor@example.com'
  }
];

const thoughts = [
  {
    thoughtText: 'This is my first thought',
    username: 'John Doe',
    reactions: [
      { reactionBody: '👍', username: 'Alice' },
      { reactionBody: '❤️', username: 'Bob' }
    ]
  },
  {
    thoughtText: 'What a beautiful day!',
    username: 'Alice Smith',
    reactions: [
      { reactionBody: '😊', username: 'John' },
      { reactionBody: '🌞', username: 'Bob' }
    ]
  },
  {
    thoughtText: 'Feeling motivated today!',
    username: 'Bob Johnson',
    reactions: [
      { reactionBody: '👏', username: 'Alice' },
      { reactionBody: '💪', username: 'John' }
    ]
  },
  {
    thoughtText: 'Just finished a great book!',
    username: 'Emily Davis',
    reactions: [
      { reactionBody: '📚', username: 'Bob' },
      { reactionBody: '👍', username: 'Alice' }
    ]
  },
  {
    thoughtText: 'Excited for the weekend!',
    username: 'Michael Wilson',
    reactions: [
      { reactionBody: '🎉', username: 'Emily' },
      { reactionBody: '🍹', username: 'Bob' }
    ]
  },
  {
    thoughtText: 'Just had a great workout!',
    username: 'Emma Brown',
    reactions: [
      { reactionBody: '💪', username: 'Michael' },
      { reactionBody: '🏋️‍♂️', username: 'Emily' }
    ]
  },
  {
    thoughtText: 'Learning something new every day!',
    username: 'David Lee',
    reactions: [
      { reactionBody: '🧠', username: 'Emma' },
      { reactionBody: '📝', username: 'Michael' }
    ]
  },
  {
    thoughtText: 'Appreciating the little things in life.',
    username: 'Sophia Martinez',
    reactions: [
      { reactionBody: '❤️', username: 'David' },
      { reactionBody: '🌸', username: 'Emma' }
    ]
  },
  {
    thoughtText: 'Enjoying some quiet time.',
    username: 'James Rodriguez',
    reactions: [
      { reactionBody: '🌙', username: 'Sophia' },
      { reactionBody: '☕', username: 'David' }
    ]
  },
  {
    thoughtText: 'Reflecting on the past week.',
    username: 'Olivia Taylor',
    reactions: [
      { reactionBody: '🤔', username: 'James' },
      { reactionBody: '📅', username: 'Sophia' }
    ]
  },
  {
    thoughtText: 'Looking forward to my vacation!',
    username: 'John Doe',
    reactions: [
      { reactionBody: '✈️', username: 'Olivia' },
      { reactionBody: '🏖️', username: 'James' }
    ]
  },
  {
    thoughtText: 'Planning my next adventure.',
    username: 'Alice Smith',
    reactions: [
      { reactionBody: '🗺️', username: 'John' },
      { reactionBody: '🚗', username: 'Olivia' }
    ]
  },
  {
    thoughtText: 'Feeling inspired to create something new.',
    username: 'Bob Johnson',
    reactions: [
      { reactionBody: '🎨', username: 'Alice' },
      { reactionBody: '💡', username: 'John' }
    ]
  },
  {
    thoughtText: 'Grateful for my friends and family.',
    username: 'Emily Davis',
    reactions: [
      { reactionBody: '👨‍👩‍👧‍👦', username: 'Bob' },
      { reactionBody: '❤️', username: 'Alice' }
    ]
  },
  {
    thoughtText: 'Enjoying a cup of coffee in the morning.',
    username: 'Michael Wilson',
    reactions: [
      { reactionBody: '☕', username: 'Emily' },
      { reactionBody: '😌', username: 'Bob' }
    ]
  },
  {
    thoughtText: 'Listening to my favorite music playlist.',
    username: 'Emma Brown',
    reactions: [
      { reactionBody: '🎵', username: 'Michael' },
      { reactionBody: '🎧', username: 'Emily' }
    ]
  },
  {
    thoughtText: 'Excited to start a new project.',
    username: 'David Lee',
    reactions: [
      { reactionBody: '🚀', username: 'Emma' },
      { reactionBody: '💼', username: 'Michael' }
    ]
  },
  {
    thoughtText: 'Feeling accomplished after a productive day.',
    username: 'Sophia Martinez',
    reactions: [
      { reactionBody: '🎉', username: 'David' },
      { reactionBody: '😊', username: 'Emma' }
    ]
  },
  {
    thoughtText: 'Looking forward to the holidays!',
    username: 'James Rodriguez',
    reactions: [
      { reactionBody: '🎄', username: 'Sophia' },
      { reactionBody: '🎁', username: 'David' }
    ]
  },
  {
    thoughtText: 'Thinking about my goals for the future.',
    username: 'Olivia Taylor',
    reactions: [
      { reactionBody: '🎯', username: 'James' },
      { reactionBody: '💭', username: 'Sophia' }
    ]
  }
];

module.exports = { users, thoughts };
