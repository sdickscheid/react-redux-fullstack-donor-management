import {
  REMOVE_DONOR_PENDING,
  REMOVE_DONOR_SUCCESS
} from '../actions/action_donors';

let initialState = []
export default(state = initialState, action) => {

  switch (action.type) {
    case REMOVE_DONOR_PENDING:
    console.log('get pending', action);
      return state;

    case REMOVE_DONOR_SUCCESS:
      console.log('get success', action);
      return [...state.payload.data];

    default:
      return state;
  }
}
