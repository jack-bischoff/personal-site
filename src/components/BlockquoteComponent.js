'use strict';

import React from 'react';

require('styles//Blockquote.css');

class BlockquoteComponent extends React.Component {
  render() {
    return (
        <div className="uk-section uk-section-medium uk-section-default">
          <div className="uk-container uk-text-center">
              <blockquote cite="">
                  <p className="uk-margin-small-bottom">"Do it"</p>
                  <footer>Sheev Palpatine</footer>
              </blockquote>
          </div>
        </div>
    );
  }
}

BlockquoteComponent.displayName = 'BlockquoteComponent';

// Uncomment properties you need
// BlockquoteComponent.propTypes = {};
// BlockquoteComponent.defaultProps = {};

export default BlockquoteComponent;
