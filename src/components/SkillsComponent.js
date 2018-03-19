'use strict';

import React from 'react';

require('styles//Skills.css');
const p = require('../images/office-photo.jpg');

export default class SkillsComponent extends React.Component {
  render() {
    return (
        <div id="work" className= "uk-section uk-section-medium work-coloring">
          <div className="uk-container">
            <div className="uk-flex-center uk-grid-large" data-uk-grid>
                <div className="uk-width-2-3">
                  <div className="uk-margin-bottom">
                    <h2 className="uk-text-center uk-margin-remove">Current Job</h2>
                    <h5 className="uk-text-center uk-margin-remove"><a href="http://deciphernow.com" rel="noopener noreferrer" target="_blank">Decipher Technology Studio</a></h5>
                    <p className="uk-text-center uk-margin-remove"> (2016 -)</p>
                  </div>
                  <div>
                    <p className="uk-text-break">
                      My work at Decipher is primarily Front-End Web App development. ReactJS coupled with Redux+Jumpstate for state mangement and uikit3 for CSS is my usual stack. I do write JQuery and can hack together Angular.
                      Hit me up if you want a React app loaded into an Angular app bootstrapped to another app through JQuery (You guessed it, Government app).
                      Some of my work related projects include:
                      <ul>
                          <li>designing and building a health-check web service for our clients and internal
                              usage;</li>
                          <li>designing and building a data aggregation and display app featuring a custom mapping solution;</li>
                          <li>rapidly resolving mission-critical UI/UX bugs which demand process overhaul;</li>
                          <li>and finally building data-heavy pages for a government related web app requiring extensive
                              usage of pre-exisiting APIs.</li>
                      </ul>
                    </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
  }
}

SkillsComponent.displayName = 'SkillsComponent';
