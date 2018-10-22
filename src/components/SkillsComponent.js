import React from 'react';
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
                      My work at Decipher is primarily Front-End Web App development. I write functional and expressive Javascript (ES7+) leveraging the ReactJS framework.
                      I'm interested in applying human psychology to design and design to beautiful experiences.
                      Some achievements at Decipher:
                    </p>
                    <ul>
                        <li>operated in a technical leadership role for a multi-million-dollar government contract, where I not only initiated a major code and services refactor, but also successfully migrated the team through a major version release.</li>
                        <li>Employed ReactJS (ES2017), Jumpstate (Redux), HTML (JSX), and CSS (LESS, SCSS) across multiple data-driven web apps, writing asynchronous data fetching, UI, and state management code often from the ground-up.</li>
                        <li>Worked with the Client in face-to-face meetings to address future improvements and outstanding bugs as part of User Assurance Tests.</li>
                        <li>Provided technical counsel during Release Planning meetings and offered pertinent UI/UX ideas to brainstorming sessions.</li>
                        <li>Debugged critical failures across environments and multiple NPM dependency chains, both public and private, and pushed patches to resolve them.</li>
                    </ul>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
  }
}
