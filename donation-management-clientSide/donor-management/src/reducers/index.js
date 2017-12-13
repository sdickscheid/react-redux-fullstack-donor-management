import reducer_donors from './reducer_donors.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  donors: reducer_donors
});

export default rootReducer;
