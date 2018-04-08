require('styles/Innovation.css');

import React from 'react';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="innovation-fonts">

            <div className="uk-section" data-uk-height-viewport>
              <div className="uk-container">
                  <h1 className="uk-heading-primary uk-animation-fade">Innovation Adventure</h1>
                  <p className="uk-text-muted uk-animation-fade">Uncovering hidden ideas through expansive interaction.</p>
                  <div className="uk-position-relative uk-visible-toggle uk-light" data-uk-slideshow>

                      <ul className="uk-slideshow-items">
                          <li>
                              <img src="https://www.rightdriveusa.com/wp-content/uploads/2015/07/usa-nissan-skyline-gtr-r32-1.jpg" alt="" data-uk-cover />
                          </li>
                          <li>
                              <img src="https://i.ebayimg.com/images/g/1t4AAOSwK31ZttG9/s-l400.png" alt="" data-uk-cover />
                          </li>
                          <li>
                              <img src="https://img.pistonheads.com/LargeSize/nissan/skyline-r32/nissan-skyline-r32-S3072450-1.jpg" alt="" data-uk-cover />
                          </li>
                      </ul>

                      <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous" data-uk-icon="icon: chevron-left; ratio: 2"></a>
                      <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next" data-uk-icon="icon: chevron-right; ratio: 2"></a>

                  </div>
              </div>
            </div>


            <div className = "uk-section uk-section-xlarge uk-section-secondary" >
                <div className="uk-container">
                  <div className="uk-text-center uk-child-width-expand" data-uk-grid>
                      <div>
                          <h1>Hello World!</h1>
                      </div>
                      <div>
                          <h1>Hello World!</h1>
                      </div>
                      <div>
                          <h1>Hello World!</h1>
                      </div>
                  </div>
                </div>
            </div>

            <div className = "uk-section uk-section-large uk-section-muted">
                <div className="uk-container">
                      <div className="uk-text-center uk-child-width-expand" data-uk-grid>
                          <div>
                              <h1>Hello World!</h1>
                          </div>
                          <div>
                              <h1>Hello World!</h1>
                          </div>
                          <div>
                              <h1>Hello World!</h1>
                          </div>
                      </div>
                  </div>
              </div>
      </div>
    )
  }
}