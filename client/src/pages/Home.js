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