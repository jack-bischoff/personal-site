require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Story from './StoryComponent'
import Masthead from './MastheadComponent';
import Heading from './HeadingComponent'
import Footer from './FooterComponent';
import Actions from './ActionsComponent';
import Bio from './BioComponent';
import Doit from './BlockquoteComponent';
import Skills from './SkillsComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Heading />
        <Bio />
        <Actions />
        <div className="uk-container">
          <hr />
        </div>
        <Skills />
        <Doit />
        <Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
