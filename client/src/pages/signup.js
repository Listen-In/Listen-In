import React from 'react';

function Signup() {
    return (
      <form method="post">
  
        <div class="container">
        <label for="uname"><b>Name</b></label>
          <input type="text" placeholder="Enter full name" name="uname" required></input>

          <label for="uname"><b>Create username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required></input>
  
          <label for="psw"><b>Create password</b></label>
          <input type="password" placeholder="8-10 characters" name="psw" required></input>
  
          <button type="submit">Signup</button>
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

export default Signup;
