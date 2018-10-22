import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({quote, byline, ...props}) => (
    <blockquote>
      <p className="uk-margin-small-bottom">{`"${quote}"`}</p>
      <footer>{byline}</footer>
    </blockquote>
)
Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  byline: PropTypes.string.isRequired
}
export default Quote;
