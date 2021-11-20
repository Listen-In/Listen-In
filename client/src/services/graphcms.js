//Code copied from https://codesource.io/building-a-blogging-platform-using-react-graphql-and-graphcms/
import gql from 'graphql-tag';
import { GraphQLClient } from 'graphql-request';
import dotenv from 'dotenv';

const createPost = async () => {
  const res = await Client.createPost(newPost);
  console.log(res);
  if (res !== false) alert("New Post Created Successfully!");
  else 
      alert("An error occurred!");
};
const handleUpdate = async () => {
  const res = await Client.updatePost(postToUpdate, replacementPost);
  if (res !== false) alert(`Successfully updated post with ID: ${postToUpdate}`);
  else 
      alert("An error occurred while attempting to update a post");
};
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
  
  async createPost({title, body, genre}) {
    const QUERY = gql`
        mutation {
            createPost(data: {
                title: "${title}",
                genre: "${genre}",
                body: "${body}"
            }) {
                id
                title
                body
                genre
            }
        }
    `;

    try {
        const data = await this.Client.request(QUERY);
        return data;
    } catch(error) {
        console.log("Error at createPost:>>", error);
        return false;
    }
}
async updatePost(post_id, { title, author, body }) {
  const QUERY = gql`
      mutation {
          updatePost(
              where: { id: "${post_id}" }
              data: { title: "${title}", author: "${author}", body: "${body}" }
          ) {
              id
              title
              body
              author
          }
      }
  `;
  try {
      const data = await this.Client.request(QUERY);
      return data;
  } catch(error) {
      console.log("Error at updatePost:>>", error);
      return false;
  }
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