import reducer_donors from './reducer_donors.js';
import reducer_selectedDonor from './reducer_selectedDonor.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  donors: reducer_donors,
  selectedDonor: reducer_selectedDonor
});

export default rootReducer;
