require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Story from './StoryComponent'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Story />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
