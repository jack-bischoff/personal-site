require('styles/Innovation.css');

import React from 'react';

export default class Main extends React.Component {

  render() {
    return (
      <div>
        <div className="uk-container uk-container-large">
          <nav className="uk-navbar-container uk-navbar-transparent navbar-position" data-uk-navbar>
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li className="uk-active"><a href="#adventure" data-uk-scroll><span data-uk-icon="icon: world"></span></a></li>
              </ul>
            </div>
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav">
                <li><a href="#adventure" data-uk-scroll>Adventure</a></li>
                <li><a href="#dc" data-uk-scroll>D.C.</a></li>
                <li><a href="#georgetown" data-uk-scroll>Georgetown</a></li>
                <li><a href="#tesla" data-uk-scroll>Tesla</a></li>
                <li><a href="#whole-foods" data-uk-scroll>Whole Foods</a></li>
                <li><a href="#lunch" data-uk-scroll>Lunch</a></li>
                <li><a href="#art-museum" data-uk-scroll>Art Museum</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div id="adventure"className="" data-uk-height-viewport="offset-top: true">
          <div className="uk-container uk-container-large">
            <div data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 150; repeat: true">
              <div>
                <h1 className="uk-heading-hero uk-margin-top">{'Innovation Adventure'}</h1>
                <p className="uk-text-large">{'Finding talent throughout the D.C. Metro Area'}</p>
              </div>
            </div>
          </div>
        </div>

        <div id="dc"className="uk-background-muted" data-uk-height-viewport="offset-top: true">
          <div className="uk-container uk-container-large">
            <div data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 150; repeat: true">
              <div>
                <h1 className="uk-heading-hero uk-margin-top">{'Washington D.C.'}</h1>
                <p className="uk-text-large">{'Catchy subtitle goes here'}</p>
              </div>
            </div>
          </div>
        </div>

        <div id="georgetown" className="primary-section uk-light" data-uk-height-viewport>
          <div className="uk-container uk-container-large">
            <div data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 150; repeat: true">
              <div>
                <h1 className="uk-heading-hero uk-margin-top">{'Georgetown'}</h1>
                <p className="uk-text-large">{'Catchy subtitle goes here'}</p>
              </div>
            </div>
          </div>
        </div>

        <div id="tesla" className="uk-background-secondary uk-light" data-uk-height-viewport>
          <div className="uk-container uk-container-large">
            <div data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 150; repeat: true">
              <div>
                <h1 className="uk-heading-hero uk-margin-top">{'Tesla Motors'}</h1>
                <p className="uk-text-large">{'0-60 in 1.9 seconds'}</p>
              </div>
            </div>
          </div>
        </div>

        <div id="whole-foods" className="primary-section uk-light" data-uk-height-viewport>
          <div className="uk-container uk-container-large">
            <div data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 150; repeat: true">
              <div>
                <h1 className="uk-heading-hero uk-margin-top">{'Whole Foods'}</h1>
                <p className="uk-text-large">{'Catchy subtitle goes here'}</p>
              </div>
            </div>
          </div>
        </div>

        <div id="lunch" className="" data-uk-height-viewport>
          <div className="uk-container uk-container-large">
            <div data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 150; repeat: true">
              <div>
                <h1 className="uk-heading-hero uk-margin-top">{'Hole In The Wall Asian Food'}</h1>
                <p className="uk-text-large">{'Catchy subtitle goes here'}</p>
              </div>
            </div>
          </div>
        </div>

        <div id="art-museum" className="uk-background-muted" data-uk-height-viewport>
          <div className="uk-container uk-container-large">
            <div data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 150; repeat: true">
              <div>
                <h1 className="uk-heading-hero uk-margin-top">{'Art Museum'}</h1>
                <p className="uk-text-large">{'Catchy subtitle goes here'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
