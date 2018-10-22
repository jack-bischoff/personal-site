import React from 'react';
import PropTypes from 'prop-types';

const Name = ({children, ...props}) => (
   <h1 {...props} >
    {children}
   </h1>
);

Name.propTypes = {
  children: PropTypes.string.isRequired
}
export default Name;
