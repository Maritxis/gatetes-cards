import React from 'react';

const Card = (props) => {
 return (
  <li>
    <h2>{props.name}</h2>
    <img src={props.image} alt={props.name}></img>
    <p>{props.text}</p>
    <input type="checkbox"/>
  </li>
 )
};

export default Card;