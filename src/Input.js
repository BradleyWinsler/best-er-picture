import React from 'react';
import './Input.css';

export const Input = (props) => {
  return (
    <input className="App-input" name="year" type="text" onChange={props.onChange} />
  );
};