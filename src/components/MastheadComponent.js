'use strict';

import React from 'react';

require('styles/Masthead.css');

let mastheadBackground = require('../images/placeholder.jpg');

const mastheadBackgroundStyle = {
    backgroundImage: 'url(' + mastheadBackground + ')',
    backgroundPosition: '30% 30%'
};

class MastheadComponent extends React.Component {
  render() {
    return (
      <div className="uk-section uk-section-large uk-section-media uk-light uk-background-cover uk-text-center" style={mastheadBackgroundStyle}>
        <h1 className="uk-heading-hero light-weight">Jack Bischoff</h1>
      </div>
    );
  }
}

MastheadComponent.displayName = 'MastheadComponent';

// Uncomment properties you need
// MastheadComponent.propTypes = {};
// MastheadComponent.defaultProps = {};

export default MastheadComponent;
