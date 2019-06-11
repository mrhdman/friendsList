const mongoose = require('mongoose');

const FriendsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Friends = mongoose.model('friends', FriendsSchema);
