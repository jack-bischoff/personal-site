'use strict';

import React from 'react';

require('styles//Footer.css');

class FooterComponent extends React.Component {
  render() {
    return (
        <div id="footer" className="uk-section footer-coloring">
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
                      <li><a className="uk-button uk-button-text uk-text-capitalize" href="https://www.linkedin.com/in/jack-bischoff-227953159"><span data-uk-icon="icon: linkedin"></span> LinkedIn</a></li>
                      <li><a className="uk-button uk-button-text uk-text-capitalize" href="https://twitter.com/Mr_Foots"><span data-uk-icon="icon: twitter"></span> Twitter</a></li>
                      <li><a className="uk-button uk-button-text uk-text-capitalize" href="http://stackoverflow.com/users/3529271/mr-foots"><span data-uk-icon="icon: code"></span> StackOverflow</a></li>
                  </ul>
              </div>
              <div>
                  <h3>Other</h3>
                  <ul className="uk-list">
                      <li><a className="uk-button uk-button-text uk-text-capitalize" href=""><span data-uk-icon="icon: file-edit"></span> Checkout my writing!</a></li>
                      <li><a className="uk-button uk-button-text uk-text-capitalize" href="http://deciphernow.com"><span data-uk-icon="icon: github-alt"></span> Decipher Technology Studios</a></li>
                  </ul>
              </div>
            </div>
            <div>
                <p className="uk-float-right uk-text-meta uk-margin-remove-top"><a className="uk-link-muted" href="https://github.com/alecholmez">Peep Alec Holmes</a></p>
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
