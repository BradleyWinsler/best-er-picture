import React from 'react';
import './Intro.css';

export const Intro = () => {
  return (
    <div className="App-intro">
    <p>
      Do you always agree with the Academy?
    </p>
    <p>
      Enter a year from 1928 to { (new Date()).getFullYear() - 1 } and vote
    </p>
    </div>
  );
};