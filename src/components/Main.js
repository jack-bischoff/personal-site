require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Header from './Header'
import Footer from './FooterComponent';
import Bio from './BioComponent';
import Skills from './SkillsComponent';
import {DoitQuote, PauseHumansQuote} from './Blockquotes';

const SectionLine = () => (
  <div className="uk-container"><hr /></div>
);
class TopLevelLayout extends React.Component {
  render() {
    return (
      <div className="index">
        <Header />
        <Bio />
        <PauseHumansQuote />
        <SectionLine />
        <Skills />
        <DoitQuote />
        <Footer />
      </div>
    );
  }
}

export default TopLevelLayout;
