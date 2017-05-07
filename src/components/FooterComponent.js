'use strict';

import React from 'react';

require('styles//Footer.css');

class FooterComponent extends React.Component {
  render() {
    return (
        <div className="uk-section uk-section-muted">
          <div className="uk-container">
            <div className="uk-flex-center uk-text-center uk-child-width-1-3 uk-grid-divider" data-uk-grid>
              <div>
                  <h3>Code</h3>
                  <ul className="uk-list">
                      <li><a className="uk-button uk-button-text uk-text-capitalize" href="">My Github</a></li>
                  </ul>
              </div>
              <div>
                  <h3>Social Media</h3>
                  <ul className="uk-list">
                      <li><a className="uk-button uk-button-text uk-text-capitalize" href="">Facebook</a></li>
                      <li><a className="uk-button uk-button-text uk-text-capitalize" href="">Twitter</a></li>
                  </ul>
              </div>
              <div>
                  <h3>Academic Writing</h3>
                  <ul className="uk-list">
                      <li><a className="uk-button uk-button-text uk-text-capitalize" href="">Papers</a></li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

FooterComponent.displayName = 'FooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
