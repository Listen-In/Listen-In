import React from "react";
import ReactPlayer from 'react-player'
import './How.css'
import sign from "../images/completion.png"


function How() {
    return (
        <>
        <img class="sign" src={sign} alt="sign" />
  
        <div id="middle"></div>
        <h2>How to Get Started:</h2>
        <div>
        <ul class="howtolist">
            <li>Pick a song to review</li>
            <li>Find it on YouTube</li>
            <li>Copy the URL</li>
            <li>Visit Listen-In</li>
            <li>Go to the Dashboard</li>
            <li>Fill out the new post form, including the YouTube URL</li>
            <li>Congratulations! Your review is live on our site!</li>
        </ul></div>
        </>
    )
}

export default How;