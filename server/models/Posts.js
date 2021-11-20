const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Post = mongoose.model('Post', postSchema);

const postSchema = new Schema({
  musicGenre: {
    type: String,
    required: true,
    trim: true
  },
  youTube: {
    type: String,
    required: true,
    trim: true
  },
  blogTitle: {
    type: String,
    required: true,
    trim: true
  },
  blogContent: {
    type: String,
    required: true,
    unique: true
  },
});



module.exports = Post;