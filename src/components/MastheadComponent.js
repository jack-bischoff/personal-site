'use strict';

import React from 'react';

require('styles/Masthead.css');

let mastheadBackground = require('../images/MastheadBackground.jpg');

const mastheadBackgroundStyle = {
    backgroundImage: 'url(' + mastheadBackground + ')'
};

class MastheadComponent extends React.Component {
  render() {
    return (
      <div className="uk-section uk-section-large uk-section-media uk-light uk-background-cover uk-text-center" style={mastheadBackgroundStyle}>
        <h1 className="uk-heading-hero light-weight">Jack Bischoff</h1>
        <p className="uk-text-lead">"Dude, do me a solid... and swap those droids"</p>
      </div>
    );
  }
}

MastheadComponent.displayName = 'MastheadComponent';

// Uncomment properties you need
// MastheadComponent.propTypes = {};
// MastheadComponent.defaultProps = {};

export default MastheadComponent;
