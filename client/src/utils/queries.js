import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query allPosts {
    posts {
      _id
      title
      genre
      url
      body
    }
  }
`;
