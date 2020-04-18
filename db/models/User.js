const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: false,
    default: "null"
  },
  email: {
    type: String,
    required: false,
    default: "null"
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  codeforces: {
    type: String,
    required: false,
    default: "null"
  },
  codechef: {
    type: String,
    required: false,
    default: "null"
  },
  submissions: {
    type: [Object],
    required: false,
    default: []
  },
  tags: {
    type: Object,
    required: false,
    default: {}
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

let User = mongoose.model('User', UserSchema);

module.exports = User;