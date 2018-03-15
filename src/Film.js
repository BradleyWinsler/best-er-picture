import React from 'react';
import {database} from './firebase';
import './Film.css';

export const Film = (props) => {
  const bestPic = props.winner;
  const path = props.path;
  function handleClick(event) {
    event.preventDefault();
    const votes = database.ref(`films/${path}/votes`);
    votes.set(props.votes + 1);
  }
  return (
    <div className="Film-item">
      <div className="Film">
        <div className="Film-title">{props.title}</div>
        <div className={bestPic ? "Film-img best-picture" : "Film-img"}>
          <img src={props.image} alt={`${props.title} Poster`} />
          <div className={bestPic ? "best-picture-text": "hide"}>Academy Choice</div>
        </div>
        <div className="Film-votes-container">
          <a href="/" className="Film-votes" onClick={handleClick}>
            <span className="fa fa-trophy"></span>
            {props.votes}
          </a>
        </div>
      </div>
    </div>
  );
};