'use strict';

import React from 'react';

require('styles//Story.css');

class StoryComponent extends React.Component {
  render() {
    return (
      <div className= "uk-section uk-section-medium uk-section-muted">
        <div className="uk-container">
          <h1 className= "uk-margin-large-left">Who Am I?</h1>
          <p className="uk-margin-large-left uk-margin-large-right">
              I am Lorem ipusm dolor sit amet, consectetur adipiscing elit. Fusce sed consectetur neque. Vestibulum sed sem nulla. Aenean auctor velit at sapien sollicitudin, eu porta mauris condimentum. Integer ut elementum purus, ac aliquam nisi. Praesent tristique risus enim, sed ultrices ex blandit eget. Praesent sed bibendum ex. Suspendisse commodo elit quis sem scelerisque efficitur.
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
