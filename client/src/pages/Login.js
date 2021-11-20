import React from 'react';
import './login.css';

function Login() {
  return (
    <form action="action_page.php" method="post">
      <div className="heading">
        <h1><a href="./index.html">Don't have a login yet? Sign up today!</a></h1>
      </div>

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

      <div className="container" style={{backgroundColor: "rgb(150, 82, 82)"}}>
        <button type="button" className="cancelbtn">Cancel</button>
      </div>
    </form>
  );
}
export default Login;