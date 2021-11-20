const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Post {
    _id: ID
    genre: String
    title: String
    body: String
    url: String
  }

  type Query {
    posts: [Post]
  }
  type Mutation {
    addPost(title: String!, genre: String!, url: String!, body: String!): Post
  }
`;

module.exports = typeDefs;
