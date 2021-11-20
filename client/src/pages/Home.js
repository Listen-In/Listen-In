import React from "react";
import ReactPlayer from 'react-player'
import './Home.css'
import sign from "../images/completion.png"

function Home() {
    return (
        <>
        <img class="sign" src={sign} alt="sign" />
  
        <div id="middle"></div>
        <h2>Check out this new song and review it yourself!</h2>
        <div class="row"></div>
        <h3>Lyrics:</h3>
        <p>
          "Could it be different?
          did I ruin the day?
          do you look angry?
          oh, what did I say?
          filling in the gaps
          build a problem that
          neither of us needs
          something wrong with me
          I'm getting desperate..." <h4>Take a listen!</h4></p>
        <ReactPlayer url='https://www.youtube.com/watch?v=MTPeEuQ-9ys' />
        </>
    )
}

export default Home;