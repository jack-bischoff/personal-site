require('styles/Innovation.css');

import React from 'react';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="innovation-fonts">

        <div className="uk-container">
            <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li className="uk-active"><a href=""><span data-uk-icon="icon: world"></span></a></li>
                    </ul>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li><a href="">Design</a></li>
                        <li><a href="">Performance</a></li>
                        <li><a href="">Innovation</a></li>
                    </ul>
                </div>
            </nav>
        </div>

            <div className="uk-section" data-uk-height-viewport>
              <div className="uk-container">
                  <div className="uk-flex uk-flex-middle">
                      <div className="uk-container">
                          <div className="uk-grid-small uk-child-width-1-2" data-uk-grid>
                            <div className="uk-margin-auto uk-margin-auto-vertical">
                                <div>
                                    <h1 className="uk-heading-primary uk-animation-fade">Datsun</h1>
                                    <p className="uk-text-muted uk-animation-fade">Building on the future.</p>
                                  </div>
                                </div>
                            <div>
                              <img className="uk-animation-fade" src="https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-urbana-da-silhueta-da-arquitetura-da-cidade-do-vetor-72590015.jpg" />
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>


            <div className = "uk-section uk-section-large uk-section-muted" >
                <div className="uk-container">
                  <div className="uk-text-center uk-child-width-expand" data-uk-grid>
                      <div>
                          <h2>Hello World!</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                      <div>
                          <h2>Hello World!</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                  </div>
                </div>
            </div>

            <div className="uk-section-default">
              <div className = "uk-section uk-section-xlarge uk-background-cover first-cover">
                <div className="uk-container">
                      <div className="uk-grid-small uk-text-center uk-child-width-1-3@s" data-uk-grid>
                          <div>
                          </div>
                          <div>
                          </div>
                          <div>
                              <div className="uk-panel uk-dark uk-background-default uk-padding">
                                  <h2>Design Speaks To Those Who Recognize Its Beauty</h2>
                                  <p>Nissan didn't just build a sports car, they built a work of art for the driver who is willing to embrace and become one with the machine. At its very essence, the 240z embodies the drivers spirit.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>

              <div className = "uk-section uk-section-large uk-section-default">
                  <div className="uk-container">
                        <div className="uk-text-center uk-child-width-expand" data-uk-grid>
                            <div>
                                <div className="crop img-1 uk-background-cover uk-background-center-center">
                                </div>
                                <h4>Beauty</h4>
                                <hr />
                                <p>Simple design to pave way for the appreciative driver and driving experience.</p>
                            </div>
                            <div>
                                <div className="crop img-2 uk-background-cover uk-background-center-center">
                                </div>
                                <h4>Innovation</h4>
                                <hr />
                                <p>Cutting-edge technology used to push the boundaries of what we though possible.</p>
                            </div>
                            <div>
                                <div className="crop img-3 uk-background-cover uk-background-center-center"></div>
                                <h4>Precision</h4>
                                <hr />
                                <p>Breakthrough manufacturing techniques to craft a brilliant vehicle with never-before-seen accuracy.</p>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
    )
  }
}