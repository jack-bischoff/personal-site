'use strict';

import React from 'react';

require('styles//Actions.css');

class ActionsComponent extends React.Component {
  render() {
    return (
      <div className="uk-section uk-section-medium uk-section-default">
        <div className="uk-container uk-text-center">
            <blockquote cite="">
                <p className="uk-margin-small-bottom">"When you press the pause button on a machine, it stops. But when you press the pause button on human beings they start."</p>
                <footer>Dov Seidman</footer>
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
