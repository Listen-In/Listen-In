import React from "react";
import './blog.css'
import logo from '../images/logo.jpg';
import { useMediaQuery } from 'react-responsive'
import { Query } from 'react-apollo';
import Dashboard from "../views/Dashboard";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import PostForm from "../components/PostForm";

const Example = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return <div>
  <h1>Device Test!</h1>
  {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
  {isBigScreen && <p>You  have a huge screen</p>}
  {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
  <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
  {isRetina && <p>You are retina</p>}
</div>
}


function Blog () {

    return (
      <PostForm></PostForm>
    );
}
export default Blog;