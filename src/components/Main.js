require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Story from './StoryComponent'
import Masthead from './MastheadComponent';
import Footer from './FooterComponent';
import Actions from './ActionsComponent';
import Bio from './BioComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Masthead />
        <Bio />
        <Actions />
        <Story />
        <Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
