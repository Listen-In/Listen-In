import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
/* import { BrowserRouter as Router, Route} from 'react-router-dom' */
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeView from './views/Home';
import Dashboard from './views/Dashboard';
import Header from './components/Header'
import Login from './pages/Login';
import Signup from './pages/signup';
import How from './pages/How';
import Footer from './components/Footer'



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


export default App;
