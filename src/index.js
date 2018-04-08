require('uikit/dist/css/uikit.min.css');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/Main';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

// Render the main component into the dom
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);
