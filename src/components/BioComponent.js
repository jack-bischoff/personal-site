'use strict';

import React from 'react';

require('styles//Bio.css');
let image = "../images/jack.jpg"

class BioComponent extends React.Component {
  render() {
    return (
      <div className= "uk-section uk-section-medium uk-section-muted">
        <div className= "container ">
          <div className="uk-flex-center" data-uk-grid>
            <div>
              <img className="circle" width="200" height="200" src={image} alt="Send Nudes"/>
              <h5>Software Engineer, <i>Decipher Technology Studios</i></h5>
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
