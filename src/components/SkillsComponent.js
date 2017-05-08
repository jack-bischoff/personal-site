'use strict';

import React from 'react';

require('styles//Skills.css');

class SkillsComponent extends React.Component {
  render() {
    return (
        <div className= "uk-section uk-section-medium uk-section-muted">
          <div className="uk-container">
            <div className="uk-flex-center uk-grid-large" data-uk-grid>
                <div className="uk-width-2-3">
                    <h2 className="uk-text-center">Work Experience</h2>
                    <div>
                        <p className="uk-text-break">I do random crap that doesn't help anyone or anything because I am useless.</p>
                    </div>
                </div>
                <div className="uk-width-1-3">
                    <h2>Skills</h2>
                    <div className="uk-grid-divider uk-child-width-1-2" data-uk-grid>
                        <div>
                            <ul className="uk-list uk-list-bullet uk-float-left uk-margin-remove-top">
                                <li>Machine Learning</li>
                                <li>React.JS</li>
                                <li>Redux</li>
                                <li>Golang</li>
                                <li>Python</li>
                                <li>UI/UX</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list uk-list-bullet uk-float-left uk-margin-remove-top">
                                <li>Mathematics</li>
                                <li>Logic</li>
                                <li>Analytics</li>
                                <li>Tensorflow</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
  }
}

SkillsComponent.displayName = 'SkillsComponent';

// Uncomment properties you need
// SkillsComponent.propTypes = {};
// SkillsComponent.defaultProps = {};

export default SkillsComponent;
