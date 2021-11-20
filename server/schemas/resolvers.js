const { Post } = require('../models');

const resolvers = {
  Query: {
    posts: async () => {
      
      return await Post.find({}).populate('title');
    }
  },
  Mutation: {
    addPost: async (parent, { title, genre, url, body }) => {
      // Create and return the new School object
      await Post.create({ title, genre, url, body });
    },
  },
};

module.exports = resolvers;
