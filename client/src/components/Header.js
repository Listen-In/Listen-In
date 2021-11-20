import React from "react";
import { Link } from "react-router-dom";
import '../pages/Header.css'

function Header() {
    return (
        <nav>
          <ul>
            <li><Link to="/">Listen In</Link></li>
<<<<<<< HEAD
            <li><Link to="/whatsnew">What's new</Link></li>
            <li><Link to="/howitworks">Howitworks</Link></li><div className="dropdown">
=======
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/howto">How It Works</Link></li><div class="dropdown">
>>>>>>> ace31681c024ef2d56d48a31fea05ba195ec5f94
              <button className="dropbtn">Profile</button>
              <div className="dropdown-content">
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/blog">blog</Link>
              </div>
            </div>
          </ul>
        </nav>

    )
}

export default Header;