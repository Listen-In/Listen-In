import React from 'react';
/* import { BrowserRouter as Router, Route} from 'react-router-dom' */
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeView from './views/Home';
import DashboardView from './views/Dashboard';
/* import Header from "./components/Header"
import Home from './pages/Home';
import Login from './pages/Login'; */
import Login from './pages/Login';
import Blog from './pages/Blog';


function App() {
  return (
    <BrowserRouter>
     {/*  <Navbar /> */}
      <Switch>
              <Route exact path="/" component={HomeView} />
              <Route path="/dashboard" component={DashboardView} />
      </Switch>
    </BrowserRouter>
  );
};

/*stuff*/

/* function App() {
  return (
    
    <Router>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/blog">
      <Blog />
    </Route>
    </Router>

  );
} */

export default App;
