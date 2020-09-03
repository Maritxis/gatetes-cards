import React from 'react';
import Card from '../cards/card';

const CardList = ({cards, favs, show, onAddToFav, onRmvFromFav}) => {
 console.log('CARDS', cards, favs, show);
 return (
  <ul>
   {show === 'favs' && favs.length > 0 && cards
    .filter((card, index) => favs.indexOf(index) !== -1)
    .map((card, index) => (<Card
      name={card.name}
      image={card.image}
      text={card.text}
      isFav={true}
      handleClick={() => onRmvFromFav(index)}
    />))
   }
  {show === 'no_favs' && favs.length > 0 && cards
    .filter((card, index) => favs.indexOf(index) === -1)
    .map((card, index) => (<Card
      name={card.name}
      image={card.image}
      text={card.text}
      isFav={false}
      handleClick={() => onAddToFav(index)}
    />))
   }
  {show === 'all' && cards
    .map((card, index) => (<Card
      key={card.name}
      name={card.name}
      image={card.image}
      text={card.text}
      isFav={favs.indexOf(index) !== -1}
      handleClick={favs.indexOf(index) !== -1 ? () => onRmvFromFav(index) : () => onAddToFav(index)}  
    />))
   }
  </ul>
 )
};

export default CardList;