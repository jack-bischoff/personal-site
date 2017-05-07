'use strict';

import React from 'react';

require('styles//Actions.css');

class ActionsComponent extends React.Component {
  render() {
    return (
      <div className="uk-section uk-section-medium uk-section-default">
        <div className="uk-container uk-text-center">
            <blockquote cite="">
                <p class="uk-margin-small-bottom">"Dude, do me a solid... and swap those droids"</p>
                <footer>Rian Johnson</footer>
            </blockquote>
        </div>
      </div>
    );
  }
}

ActionsComponent.displayName = 'ActionsComponent';

// Uncomment properties you need
// ActionsComponent.propTypes = {};
// ActionsComponent.defaultProps = {};

export default ActionsComponent;
