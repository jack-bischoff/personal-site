require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Masthead from './MastheadComponent';
import Footer from './FooterComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Masthead />

        <Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
