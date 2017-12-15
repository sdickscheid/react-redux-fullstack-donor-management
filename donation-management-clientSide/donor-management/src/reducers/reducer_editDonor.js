import {
  EDIT_DONOR_PENDING,
  EDIT_DONOR_SUCCESS
} from '../actions/action_donors';

let initialState = []
export default(state = initialState, action) => {

  switch (action.type) {

    case EDIT_DONOR_PENDING:
    console.log('editDonor REDUCER PENDING', "...CHILLIN");
      return state;

    case EDIT_DONOR_SUCCESS:
    console.log('editDonor REDUCER SUCCESS', "...iGOTCHA");
      return [...action.payload.data];

    default:
      return state;
  }
}
