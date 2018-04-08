require('uikit/dist/css/uikit.min.css');

import 'core-js/fn/object/assign';
import 'jquery'
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Home from './pages/Personal/Home';
import Innovation from './pages/Innovation/Main';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

// Render the main component into the dom
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/innovation-adventure" component={Innovation} />
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);