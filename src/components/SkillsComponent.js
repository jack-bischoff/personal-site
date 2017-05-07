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
                        <p className="uk-text-break">I am Lorem ipusm dolor sit amet, consectetur adipiscing elit. Fusce sed consectetur neque. Vestibulum sed sem nulla. Aenean auctor velit at sapien sollicitudin, eu porta mauris condimentum. Integer ut elementum purus, ac aliquam nisi.</p>
                    </div>
                </div>
                <div className="uk-width-1-3">
                    <h2>Skills</h2>
                    <ul className="uk-list uk-list-bullet">
                        <li>Machine Learning</li>
                        <li>React.JS</li>
                        <li>Redux</li>
                        <li>Golang</li>
                        <li>Python</li>
                    </ul>
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
