'use strict';

import React from 'react';

require('styles//Footer.css');

class FooterComponent extends React.Component {
  render() {
    return (
        <div className="uk-section space-grey uk-light">
          <div className="uk-container">
            <div className="uk-flex-center uk-text-center uk-child-width-1-3 uk-grid-large" data-uk-grid>
              <div>
                  <h3>Code</h3>
                  <ul className="uk-list">
                      <li><a className="uk-button uk-button-text uk-text-capitalize" href="https://github.com/jack-bischoff"><span data-uk-icon="icon: github"></span> My Github</a></li>
                      <li><a className="uk-button uk-button-text uk-text-capitalize" href="https://getuikit.com"><span data-uk-icon="icon: uikit"></span> Built With UIKit</a></li>
                  </ul>
              </div>
              <div>
                  <h3>Social Media</h3>
                  <ul className="uk-list">
                      <li><a className="uk-button uk-button-text uk-text-capitalize" href="https://twitter.com/Mr_Foots"><span data-uk-icon="icon: twitter"></span> Twitter</a></li>
                  </ul>
              </div>
              <div>
                  <h3>Academic Writing</h3>
                  <ul className="uk-list">
                      <li><a className="uk-button uk-button-text uk-text-capitalize" href=""><span data-uk-icon="icon: file-edit"></span> Papers</a></li>
                  </ul>
              </div>
            </div>
            <hr />
            <p className="uk-text-meta">Masthead image by: Nina Geometrieva</p>
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
