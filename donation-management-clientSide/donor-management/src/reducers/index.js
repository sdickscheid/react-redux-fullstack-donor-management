import reducer_donors from './reducer_donors.js';
import reducer_selectedDonor from './reducer_selectedDonor.js';
import reducer_removeDonor from './reducer_removeDonor.js';
import reducer_editDonor from './reducer_editDonor.js';
import reducer_donorGifts from './reducer_donorGifts.js'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  donors: reducer_donors,
  selectedDonor: reducer_selectedDonor,
  removeDonor: reducer_removeDonor,
  editDonor: reducer_editDonor,
  donorGifts: reducer_donorGifts
});

export default rootReducer;
