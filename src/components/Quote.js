'use strict';

import React from 'react';

require('styles//Blockquote.css');

export default class Quote extends React.Component {
  render() {
    return (
        <div className="uk-section uk-section-medium raleway-font">
          <div className="uk-container uk-text-center">
              <blockquote cite="">
                  <p className="uk-margin-small-bottom">{this.props.quote}</p>
                  <footer>{this.props.by}</footer>
              </blockquote>
          </div>
        </div>
    );
  }
}


// Uncomment properties you need
// BlockquoteComponent.propTypes = {};
// BlockquoteComponent.defaultProps = {};
