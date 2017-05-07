'use strict';

import React from 'react';

require('styles//Story.css');

class StoryComponent extends React.Component {
  render() {
    return (
      <div className= "story uk-section uk-section-medium uk-section-muted">
        <div className="uk-container">
          <h1 className= "uk-margin-large-left">My Story</h1>
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
