require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Story from './StoryComponent'
import Masthead from './MastheadComponent';
import Footer from './FooterComponent';
import Actions from './ActionsComponent';
import Doit from './BlockquoteComponent';
import Skills from './SkillsComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Masthead />
        <Actions />
        <Story />
        <Doit />
        <Skills />
        <Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
