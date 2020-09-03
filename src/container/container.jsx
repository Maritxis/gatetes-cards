import React, { useState } from 'react';
import store from '../store/store';
import { connect } from 'react-redux';
import ACTIONS from '../store/actions';
import CardList from '../card-list/card-lits';

const mapStoreToProps = (state) => ({
 cards: state.data,
 favs: state.favourites,
 show: state.show,
});
const mapDispatchToProps = (dispatch) => ({
 onAddToFav: (id) => dispatch({type: ACTIONS.ADD_TO_FAVOURITES, payload: id}),
 onRmvFromFav: (id) => dispatch({type: ACTIONS.RMV_FROM_FAV, payload: id})
});

const ConnectedCardList = connect(mapStoreToProps, mapDispatchToProps)(CardList);

const displayData = () => store.dispatch({type: ACTIONS.DISPLAY_DATA});
const Container = () => {
 const [isInitialPage, setIsInitialPage] = useState(store.getState().initialPage);
store.subscribe(() => {
  setIsInitialPage(store.getState().initialPage)
});

 return (
  <div>
   { isInitialPage
    ? <button onClick={displayData}>Enséñame los gatetes</button>
    : <ConnectedCardList />
   }
  </div>
 )
};

export default Container;
