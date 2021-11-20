import React from "react";
import ReactPlayer from 'react-player'
import './Home.css'
<<<<<<< HEAD
import { useMediaQuery } from 'react-responsive'
=======
import sign from "../images/completion.png"
>>>>>>> ace31681c024ef2d56d48a31fea05ba195ec5f94

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
    return (
        <>
        <img class="sign" src={sign} alt="sign" />
  
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
          I'm getting desperate..." <h4>Take a listen!</h4></p>
        <ReactPlayer url='https://www.youtube.com/watch?v=MTPeEuQ-9ys' />
        </>
    )
}

export default Home;