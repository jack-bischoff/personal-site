import React from 'react'


export default class Header extends React.Component {

  render() {
    return (
      <nav className='' data-uk-navbar>
        <div className='uk-navbar-center'>
          <div className='uk-container'>
              <div className='uk-text-center'>
                <h1 className='limelight-font font-larger'>Jack Bischoff</h1>
              </div>
              <div className='header-text uk-flex uk-flex-center uk-margin-right oswald-font uk-text-large'>
                <div><a href='#work' data-uk-scroll>What I do</a></div>
                <div className='uk-margin-left'><a href='#'>Something Else</a></div>
                <div className='uk-margin-left'><a href='#'>Blog</a></div>
                <div className='uk-margin-left'><a href='#footer' data-uk-scroll>Contact Me</a></div>
              </div>
            </div>
          </div>
      </nav>
    )
  }


}
