import ACTIONS from './actions';
import data from '../data/data';

const initialState = {
 data: [],
 initialPage: true,
 favourites: [],
 show: 'all'
};

const reducer = (state = initialState, action) => {
 switch(action.type) {
  case(ACTIONS.DISPLAY_DATA):
   return {...state, data, intialPage: false };
  case(ACTIONS.ADD_TO_FAVOURITES):
   return {...state, favourites: state.favourites.push(action.payload)};
  case(ACTIONS.RMV_FROM_FAV):
   return {...state, favourites: state.favourites.splice(action.payload, 1)};
  case(ACTIONS.SHOW_ALL):
   return {...state, show: 'all'};
  case(ACTIONS.SHOW_FAV):
   return {...state, show: 'favs'};
  case(ACTIONS.SHOW_NOT_FAV):
   return {...state, show: 'not_favs'};
  default:
   return state;
 }
};

export default reducer;