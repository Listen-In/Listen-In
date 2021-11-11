import React from react; 
import './App.css';
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


//stuff

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
