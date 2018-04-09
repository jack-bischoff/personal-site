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
                        <li><a href="#design" data-uk-scroll>Design</a></li>
                        <li><a href="#performance" data-uk-scroll>Performance</a></li>
                        <li><a href="#innovation" data-uk-scroll>Innovation</a></li>
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

        <div id="design" className="uk-section-default">
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

          <div id="performance" className = "uk-section uk-section-large uk-section-default">
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
                            <p>Cutting-edge technology used to push the boundaries of what we thought possible.</p>
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

            <div className="uk-section-default">
              <div className = "uk-section uk-section-xlarge uk-background-cover second-cover">
                <div className="uk-container">
                      <div className="uk-grid-small uk-text-center uk-child-width-1-3@s" data-uk-grid>
                          <div>
                              <div className="uk-panel uk-dark uk-background-default uk-padding">
                                  <h2>Design Speaks To Those Who Recognize Its Beauty</h2>
                                  <p>Nissan didn't just build a sports car, they built a work of art for the driver who is willing to embrace and become one with the machine. At its very essence, the 240z embodies the drivers spirit.</p>
                              </div>
                          </div>
                          <div></div>
                          <div></div>
                      </div>
                  </div>
              </div>
            </div>

            <div className="uk-section uk-section-large uk-section-muted">
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

            <div id="innovation" className = "uk-section uk-section-medium uk-section-default">
              <div className="uk-container">
                  <div className="uk-text-center" data-uk-grid>
                      <div className="uk-width-1-2">
                          <div className="crop-large img-2 uk-background-cover uk-background-center-center"></div>
                      </div>
                      <div className="uk-width-1-4 uk-margin-auto uk-margin-auto-vertical">
                          <h2>Precision</h2>
                          <p>Breakthrough manufacturing techniques to craft a brilliant vehicle with never-before-seen accuracy.</p>
                      </div>
                  </div>
              </div>
            </div>

            <div className="uk-container">
                <hr />
            </div>

            <div className = "uk-section uk-section-medium uk-section-default">
              <div className="uk-container">
                <div className="uk-text-center" data-uk-grid>
                    <div className="uk-width-1-4 uk-margin-auto uk-margin-auto-vertical">
                        <h2>Beauty</h2>
                        <p>Simple design to pave way for the appreciative driver and driving experience.</p>
                    </div>
                    <div className="uk-width-1-2">
                        <div className="crop-large img-3 uk-background-cover uk-background-center-center"></div>
                    </div>
                </div>
              </div>
            </div>

            <div id="footer" className="uk-section uk-section-muted">
              <div className="uk-container">
                <div className="uk-flex-center uk-text-center uk-child-width-1-3 uk-grid-large" data-uk-grid>
                  <div>
                      <h3 className="">Code</h3>
                      <ul className="uk-list">
                          <li><a className="uk-button uk-button-text uk-text-capitalize" href="https://github.com/jack-bischoff"><span data-uk-icon="icon: github"></span> My Github</a></li>
                          <li><a className="uk-button uk-button-text uk-text-capitalize" href="https://getuikit.com"><span data-uk-icon="icon: uikit"></span> Built With UIKit</a></li>
                      </ul>
                  </div>
                  <div>
                      <h3 className="">Social Media</h3>
                      <ul className="uk-list">
                          <li><a className="uk-button uk-button-text uk-text-capitalize" href="https://www.linkedin.com/in/jack-bischoff-227953159"><span data-uk-icon="icon: linkedin"></span> LinkedIn</a></li>
                          <li><a className="uk-button uk-button-text uk-text-capitalize" href="https://twitter.com/Mr_Foots"><span data-uk-icon="icon: twitter"></span> Twitter</a></li>
                          <li><a className="uk-button uk-button-text uk-text-capitalize" href="http://stackoverflow.com/users/3529271/mr-foots"><span data-uk-icon="icon: code"></span> StackOverflow</a></li>
                      </ul>
                  </div>
                  <div>
                      <h3 className="">Other</h3>
                      <ul className="uk-list">
                          <li><a className="uk-button uk-button-text uk-text-capitalize" href=""><span data-uk-icon="icon: file-edit"></span> Checkout my writing!</a></li>
                          <li><a className="uk-button uk-button-text uk-text-capitalize" href="http://deciphernow.com"><span data-uk-icon="icon: github-alt"></span> Decipher Technology Studios</a></li>
                          <li><a className="uk-text-small uk-link-muted" href="https://github.com/alecholmez">Peep Alec Holmes</a></li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
      </div>
    )
  }
}