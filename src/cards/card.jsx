import React from 'react';
import { ReactComponent as EmptyStar } from '../assets/star.svg';
import { ReactComponent as FilledStar } from '../assets/star_filled.svg';
import './card.jsx';

const Card = ({name, image, text, isFav, handleClick}) => {
 return (
  <li key={name}>
    <h2>{name}</h2>
    <img src={image} alt={name}></img>
    <p>{text}</p>
    <div style={{width: '5%'}} onClick={handleClick}>
      { isFav 
      ? <FilledStar/>
      : <EmptyStar />
    }
    </div>
  </li>
 )
};

export default Card;