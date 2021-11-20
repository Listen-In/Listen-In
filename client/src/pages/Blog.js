import React from "react";
import './blog.css'
import logo from '../images/logo.jpg';
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


function Blog () {
    return (
      <form action="action_page.php" method="post">
          <img src={logo} alt="Logo" />;
          <p>Blog about your favorite music videos like popular songs like uptown funk by Bruno mars and many more!. </p>
        <div class="container">
          <label for="uname"><b>Title</b></label>
          <input type="text" placeholder="Enter title ex: Stay by .." name="uname" required></input>
          <label for="psw"><b>Music Genre</b></label>
          <input type="text" placeholder="type in your genre" name="psw" required></input>

          <label for="psw"><b>youtube video</b></label>
          <input type="text" placeholder="enter video" name="psw" required></input>

          <label for="psw"><b>Comments</b></label>
          <input type="text" placeholder="Enter thoughts about videos" name="psw" required></input>
  
          <button type="submit">Submit</button>
        </div>
  
        <div className="container" style={{backgroundColor: "rgb(159, 66, 66)"}}>
          <button type="button" className="cancelbtn">Cancel</button>
        </div>
        
      </form>
    );
}

    export default Blog;