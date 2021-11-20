import React from "react";
import './blog.css'
import logo from '../images/logo.jpg';
import { Query } from 'react-apollo';
import Dashboard from "../views/Dashboard";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import PostForm from "../components/PostForm";

function Blog () {

    return (
      <PostForm></PostForm>
    );
}
export default Blog;