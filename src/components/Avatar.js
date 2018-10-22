import React from 'react';
import PropTypes from 'prop-types';

const personalAvatar = require('../images/profile.jpg')

const Avatar = ({style, ...props}) => (
  <div>
    <img
      style={{width: "200px", height: "200px"}}
      {...props}
    />
  </div>
)

Avatar.propTypes = {
  alt: PropTypes.string
}
Avatar.defaultProps = {
  src: personalAvatar,
  alt: 'Jack Bischoff'
}

export default Avatar;
