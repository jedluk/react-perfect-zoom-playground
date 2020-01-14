import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import './App.css';
import App from './App';
import Demo from './Demo';
import Navigation from './Navigation';

const routing = (
  <Router>
    <div className="App">
      <Navigation />
      <Route exact path="/" component={App} />
      <Route exact path="/demo" component={Demo} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById('root'));
