import React from 'react';
import './login.css';
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

function Login() {
  return (
    <form method="post">

      <div class="container">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required></input>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required></input>

        <button type="submit">Login</button>
          <input type="checkbox" checked="checked" name="remember" />
          <label>
         Remember me
        </label>
      </div>

      <div className="container" style={{backgroundColor: ""}}>
        <button type="button" className="cancelbtn">Cancel</button>
      </div>
    </form>
  );
}
export default Login;