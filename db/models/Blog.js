const mongoose = require('mongoose');

let BlogSchema = new mongoose.Schema ({
  title: {
    type: String,
    required: [true]
  },
  slug: {
    type: String,
    required: [true]
  },
  author: {
    type: String,
    required: [true, 'User is mandatory']
  },
  tags: {
    type: [String],
    default: ['Algorithm']
  },
  TextBody: {
    type: String,
    required: [false, 'Body is mandatory'],
    default:""
  },
  CodeBody: {
    type: String,
    required: [false, 'Body is mandatory'],
    default: ""
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

let Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;