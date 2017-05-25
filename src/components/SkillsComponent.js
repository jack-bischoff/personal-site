'use strict';

import React from 'react';

require('styles//Skills.css');

export default class SkillsComponent extends React.Component {
  render() {
    return (
        <div className= "uk-section uk-section-medium uk-section-muted">
          <div className="uk-container">
            <div className="uk-flex-center uk-grid-large" data-uk-grid>
                <div className="uk-width-2-3">
                    <h2 className="uk-text-center">Work Experience</h2>
                    <div>
                        <p className="uk-text-break">
                            I have been working for <a href="http://deciphernow.com" rel="noopener noreferrer" target="_blank">Decipher Technology Studios</a> as a Software Developer
                            for a year. Throughout the year I have been primarily a web developer dealing with ReactJS (read as: headaches) 
                            and Redux for front-end coding. Designer, I am not, but I can skate by with uikit (used in this website).
                            Some of my work related projects include: 
                            <ul>
                                <li>designing and building a health-check web service for our clients and internal
                                    usage;</li> 
                                <li>designing and building a data aggregation and display app featuring a custom mapping solution;</li>
                                <li>and finally building data-heavy pages for a government related web app requiring extensive 
                                    usage of pre-exisiting APIs.</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="uk-width-1-3">
                    <h2>Skills</h2>
                    <div className="uk-grid-divider uk-child-width-1-2" data-uk-grid>
                        <div>
                            <ul className="uk-list uk-list-bullet uk-float-left uk-margin-remove-top">
                                <li>React.JS</li>
                                <li>Redux</li>
                                <li>Golang</li>
                                <li>Python</li>
                                <li>UI/UX</li>
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

