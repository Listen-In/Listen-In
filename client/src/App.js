import React from 'react';
/* import { BrowserRouter as Router, Route} from 'react-router-dom' */
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeView from './views/Home';
import Dashboard from './views/Dashboard';
import Header from './components/Header'
import Login from './pages/Login';
<<<<<<< HEAD
import Signup from './pages/signup';
=======
import How from './pages/How';
import Footer from './components/Footer'
>>>>>>> ace31681c024ef2d56d48a31fea05ba195ec5f94


function App() {
  return (
    <BrowserRouter>
     <Header />
      <Switch>
              <Route exact path="/" component={HomeView} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/login" component={Login} />
              <Route path="/howto" component={How} />
      </Switch>
      <Footer />
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
      <Route exact path="/signup">
      <Signup />
    </Route>
    </Router>

  );
} */

export default App;
