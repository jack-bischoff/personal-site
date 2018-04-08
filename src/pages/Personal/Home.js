require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Header from './Header'
import Footer from './Footer';
import Quote from './Quote';
import Bio from './Bio';
import Work from './Work';

export default class Home extends React.Component {
  render() {
    return (
      <div className="index">
        <Header />
        <hr />
        <Bio />
        <Quote
          quote={'When you press the pause button on a machine, it stops. But when you press the pause button on human beings they start.'}
          by={'Dov Seidman'}
        />
        <div className="uk-container">
          <hr />
        </div>
        <Work />
        <Quote
          quote={'Do it.'}
          by={'Sheev Palpatine'}
        />
        <Footer />
      </div>
    );
  }
}
