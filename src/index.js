import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Homepage from './Homepage';
import Navbar from './components/Navbar';
import BuySearchResult from './components/BuySearchResult';
import Buy from './components/Buy';
import AnimalDetails from './components/AnimalDetails';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import AddAnimal from './components/AddAnimal';
import 'bootstrap/dist/css/bootstrap.css';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path= "/home" component= {Homepage} />
      <Route path= "/navbar" component= {Navbar} />
      <Route path= "/buySearch" component= {Buy} />
      <Route path = "/buySearchResult" component= {BuySearchResult} />
      <Route path = "/animalDetails" component= {AnimalDetails} />
      <Route path = "/login" component ={Login} />
      <Route path = "signUp" component ={SignUp} />
      <Route path = "/dashboard" component ={Dashboard} />
      <Route path = "/addAnimal" component= {AddAnimal} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
