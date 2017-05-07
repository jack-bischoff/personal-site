'use strict';

import React from 'react';

require('styles/Masthead.css');

let mastheadBackground = require('../images/placeholder.jpg');

const mastheadBackgroundStyle = {
    backgroundImage: 'url(' + mastheadBackground + ')',
    backgroundPosition: '50% 20%'
};

class MastheadComponent extends React.Component {
  render() {
    return (
      <div className="uk-section uk-section-xlarge uk-section-media uk-light uk-background-cover uk-text-center" style={mastheadBackgroundStyle}>
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
