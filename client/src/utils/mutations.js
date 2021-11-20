import { gql } from '@apollo/client';

export const ADD_POST = gql`
mutation addPost(
  $title: String!, 
  $genre: String!, 
  $url: String!, 
  $body: String!) {
  addPost(
    title: $title, 
    genre: $genre, 
    url: $url, 
    body: $body) {
    _id
    genre
    title
    url
    body
  }
}
`;