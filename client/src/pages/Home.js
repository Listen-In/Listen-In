import React from "react";
import ReactPlayer from 'react-player'
import './Home.css'
import { useMediaQuery } from 'react-responsive'
import sign from "../images/completion.png"
import PostList from "../components/PostList"
import { useQuery } from '@apollo/client';
import {QUERY_POSTS} from '../utils/queries'


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
function Home() {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
    return (
        <>
        <img className="sign" src={sign} alt="sign" />
        <PostList
              posts={posts}
              title="Here are all the blog posts on our site!"
            />
  
        <div id="middle"></div>
        <h2>Check out this new song and review it yourself!</h2>
        <p>
          "Could it be different?<br/>
          did I ruin the day?<br/>
          do you look angry?<br/>
          oh, what did I say?<br/>
          filling in the gaps<br/>
          build a problem that
          neither of us needs<br/>
          something wrong with me<br/>
          I'm getting desperate..." <strong>Take a listen!</strong></p>
        <ReactPlayer url='https://www.youtube.com/watch?v=MTPeEuQ-9ys' />
        </>
    )
}

export default Home;