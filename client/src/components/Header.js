import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
          <ul>
            <li><Link to="/">Listen In</Link></li>
            <li><Link to="/whatsnew">What's new</Link></li>
            <li><Link to="/howitworks">Howitworks</Link></li><div class="dropdown">
              <button className="dropbtn">Profile</button>
              <div className="dropdown-content">
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </div>
            </div>
          </ul>
        </nav>

    )
}

export default Header;