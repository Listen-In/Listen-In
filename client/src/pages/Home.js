import React from "react";
import ReactPlayer from 'react-player'
import './Home.css'
import { useMediaQuery } from 'react-responsive'

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
        <form>
          <label><h1>What are you listening to?</h1></label>
          <input type="text" id="fname" name="form"></input>
          <button type="button">Submit</button>
        </form>
  
        <div id="middle"></div>
        <h2>Check out this new up and coming artist</h2>
        <div class="row"></div>
        <h3>Lyrics:</h3>
        <p>
          <h4>Dodie with "Hate Myself," from Build A Problem</h4>
          "Could it be different?
          did I ruin the day?
          do you look angry?
          oh, what did I say?
          filling in the gaps
          build a problem that
          neither of us needs
          something wrong with me
          I'm getting desperate..." <h4>check out more from this song down below </h4></p>
        <ReactPlayer url='https://www.youtube.com/watch?v=MTPeEuQ-9ys' />
        </>
    )
}

export default Home;