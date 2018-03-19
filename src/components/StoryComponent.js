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
          I'm a deep thinker. <br></br>
          A wild dreamer.  <br></br>
          I'm <a href="https://www.lp.org/">Libertarian</a>, because I believe in <strong>Liberty for everyone</strong>. <br></br>
          I code. I write. I drink (unhealthly amounts of coffee). <br></br>
          Dogs or Cats? Dogs, <strong>duh</strong>. <br></br>
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
