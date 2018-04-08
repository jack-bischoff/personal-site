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
                  <div className="uk-flex uk-flex-middle">
                      <div className="uk-grid-small uk-child-width-1-2" data-uk-grid>
                        <div className="uk-margin-auto uk-margin-auto-vertical">
                            <div>
                                <h1 className="uk-heading-primary uk-animation-fade">Innovation Adventure</h1>
                                <p className="uk-text-muted uk-animation-fade">Uncovering hidden ideas through expansive interaction.</p>
                              </div>
                            </div>
                        <div>
                          <img className="uk-animation-fade" src="https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-urbana-da-silhueta-da-arquitetura-da-cidade-do-vetor-72590015.jpg" />
                        </div>
                      </div>
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

            <div className = "uk-section uk-section-large uk-section-default">
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

              <div className = "uk-section uk-section-large uk-section-default">
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