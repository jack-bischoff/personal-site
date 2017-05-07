'use strict';

import React from 'react';

require('styles//Story.css');

class StoryComponent extends React.Component {
  render() {
    return (
      <div className="story-component">
        <h1> My Story</h1>
      </div>
    );
  }
}

StoryComponent.displayName = 'StoryComponent';

// Uncomment properties you need
// StoryComponent.propTypes = {};
// StoryComponent.defaultProps = {};

export default StoryComponent;
