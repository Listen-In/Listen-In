//Code copied from https://codesource.io/building-a-blogging-platform-using-react-graphql-and-graphcms/
import gql from 'graphql-tag';
import { GraphQLClient } from 'graphql-request';
import dotenv from 'dotenv';

export default class GraphCMSContent {
  constructor() {
    dotenv.config();

    this.Client = new GraphQLClient(
      process.env.REACT_APP_GCMS_URL,
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_GCMS_AUTH}`
        }
      }
    );
  };

  fetchPosts(){
    const QUERY = gql`
      query {
        posts {
          id
          title
          body
          author
          createdAt
          songvideo
          trending
        }
      }
    `;
    return QUERY;
  };
};