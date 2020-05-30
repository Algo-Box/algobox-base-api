import { Schema, model } from 'mongoose';

const BlogSchemaDef = new Schema({
  title: {
    type: String,
    required: [ true ]
  },
  slug: {
    type: String,
    required: [ true ]
  },
  author: {
    type: String,
    required: [ true, 'User is mandatory' ]
  },
  tags: {
    type: [ String ],
    default: [ 'Algorithm' ]
  },
  Body: {
    type: String,
    required: [ false, 'Body is mandatory' ],
    default: ''
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

export const BlogSchema = model('Blog', BlogSchemaDef);
