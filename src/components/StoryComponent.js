'use strict';

import React from 'react';

require('styles//Story.css');

class StoryComponent extends React.Component {
  render() {
    return (
      <div className= "uk-section uk-section-large uk-section-meteor uk-light">
        <div className="uk-container">
          <h1 className= "uk-margin-large-left">Who Am I?</h1>
          <p className="uk-margin-large-left uk-margin-large-right">
              That's a great question. And a question which will be answered after I play video games... or something...
          </p>
        </div>
      </div>
    );
  }
}

StoryComponent.displayName = 'StoryComponent';

// Uncomment properties you need
// StoryComponent.propTypes = {};
// StoryComponent.defaultProps = {};

export default StoryComponent;
