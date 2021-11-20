import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Header from "./components/Header"
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/signup';



/*stuff*/

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
      <Signup />
    </Route>
    </Router>

  );
}

export default App;
