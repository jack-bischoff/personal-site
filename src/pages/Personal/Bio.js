'use strict';

import React from 'react';

require('styles/Bio.css');
const personal = require('../../images/jack2.jpg');

export default class Bio extends React.Component {
  render() {
    return (
      <div className= "uk-section uk-padding-remove">
        <div className= "container">
          <div className="uk-flex-center uk-grid-large" data-uk-grid>
            <div>
                <img className="circle" width="200" height="200" src={personal} alt=""/>
            </div>
            <div className="uk-margin-large-top">
                <h4 className="accent-text1 uk-comment-title uk-margin-remove oswald-font">Software Engineer</h4>
                <ul className="uk-subnav uk-subnav-divider uk-margin-remove-top">
                    <li><a className="uk-link-reset" href="http://deciphernow.com/">Decipher Technology Studios</a></li>
                </ul>
                <hr />
                <h4 className="accent-text1 uk-comment-title uk-margin-remove-bottom uk-margin-remove-top oswald-font">Sophomore</h4>
                <ul className=" uk-subnav uk-subnav-divider uk-margin-remove-top">
                    <li><a className="uk-link-reset" href="https://www.umd.edu/">University Of Maryland</a></li>
                </ul>
            </div>
            <div className="uk-container uk-margin-large-top">
              <p className="uk-margin-large-left uk-margin-large-right montserrat-font">
                I'm a deep thinker. <br></br>
                A wild dreamer.  <br></br>
                Insistent Innovator. <br></br>
                I'm <a href="https://www.lp.org/">Libertarian</a>, because I believe in <strong>Liberty for everyone</strong>. <br></br>
                I code. I write. I drink (copious amounts of coffee). <br></br>
                Dogs or cats? Dogs, <strong>duh</strong>. <br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}