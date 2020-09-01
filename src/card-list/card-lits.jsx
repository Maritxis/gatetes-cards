import React from 'react';
import Card from '../cards/card';

const CardList = ({cards, favs, filter}) => {
 return (
  <ul>
   {cards
    .filter((card, index) => favs.indexOf(index) !== -1)
    .map(card => (<Card name={card.name} image={card.image} text={card.text}/>))
    }
  </ul>
 )
};

export default CardList;