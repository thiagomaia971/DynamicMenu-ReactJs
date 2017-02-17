import { combineReducers } from 'redux';
/*const { routerReducer } = require('react-router-redux');
const formReducer = require('redux-form').reducer;*/
import menu from './menu';

const rootReducer = combineReducers({
  menu
});

export default rootReducer;
