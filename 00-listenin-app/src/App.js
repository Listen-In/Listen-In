
import 'App.css';

/*stuff*/

function App() {
  return (
    <body>
      <nav> 
        <ul>
            <li><a href="#">Listen In</a></li>
            <li><a href="./new.html">What's new</a></li>
            <li><a href="./about.html">About us</a></li><div class="dropdown">
                <button className="dropbtn">Profile</button>
                <div className="dropdown-content">
                  <a href="./Login.html">Login</a>
                  <a href="#">Signup</a>
                  <a href="#">Account</a>
                </div>
              </div>
          </ul>
    </nav>
    </body>
    
 
       
  );
}

export default App;
