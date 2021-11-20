const { Post } = require('../models');

const resolvers = {
  Query: {
    posts: async () => {
      
      return await Post.find({});
    }
  },
  Mutation: {
    addPost: async (parent, { title, genre, url, body }) => {
      // Create and return the new School object
      return await Post.create({ title, genre, url, body });
    },
  },
};

module.exports = resolvers;
