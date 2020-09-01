import React from 'react';
import store from '../store/store';
import CardList from '../card-list/card-lits';

const Container = () => {
 return (
  <div>
   {true
    ? <button>Enséñame los gatetes</button>
    : <div></div>
   }
  </div>
 )
};

export default Container;
