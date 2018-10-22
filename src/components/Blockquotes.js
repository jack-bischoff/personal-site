import React from 'react';
import Quote from './Quote';

const Blockquote = (props) => (
    <div className="uk-section uk-section-medium uk-section-default">
      <div className="uk-container uk-text-center">
        {props.children}
      </div>
    </div>
);

export const DoitQuote = () => (
  <Blockquote>
    <Quote quote="Do it." byline="Sheev Palpatine" />
  </Blockquote>
)

export const PauseHumansQuote = () => (
  <Blockquote>
    <Quote quote="When you press the pause button on a machine, it stops. But when you press the pause button on human beings they start." byline="Dov Seidman" />
  </Blockquote>
)
