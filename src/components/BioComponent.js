'use strict';

import React from 'react';

require('styles//Bio.css');
let image = '../images/jack.jpg'

class BioComponent extends React.Component {
  render() {
    return (
      <div className= "uk-section uk-section-xsmall uk-section-muted">
        <div className= "container">
          <div className="uk-flex-center uk-grid-large" data-uk-grid>
            <div>
                <div>
                    <img className="circle" width="200" height="200" src={image} alt="Send Nudes"/>
                </div>
            </div>
            <div>
                <div className="uk-margin-large-top">
                    <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset">Software Engineer</a></h4>
                    <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                        <li><a>Decipher Technology Studios</a></li>
                    </ul>
                    <hr />
                    <h4 className="uk-comment-title uk-margin-remove-bottom uk-margin-remove-top"><a className="uk-link-reset">Sophomore</a></h4>
                    <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                        <li><a>University Of Maryland</a></li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BioComponent.displayName = 'BioComponent';

// Uncomment properties you need
// BioComponent.propTypes = {};
// BioComponent.defaultProps = {};

export default BioComponent;
