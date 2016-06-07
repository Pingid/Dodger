import { createStore, combineReducers } from 'redux';
import mouseReducer from './mouseReducer';
import gameReducer from './gameReducer';
import global from './global';

const store = createStore(combineReducers({
  mouse: mouseReducer,
  game: gameReducer,
  global
  })
);

module.exports = store;
