import {
  GET_DONORS_PENDING,
  GET_DONORS_SUCCESS,
  ADD_DONOR_PENDING,
  ADD_DONOR_SUCCESS,
  EDIT_DONOR_PENDING,
  EDIT_DONOR_SUCCESS
} from '../actions/action_donors';

let initialState = []
export default(state = initialState, action) => {

  switch (action.type) {
    case GET_DONORS_PENDING:
      return state;

    case GET_DONORS_SUCCESS:
      return [...action.payload.data];

    case ADD_DONOR_PENDING:
      return state;

    case ADD_DONOR_SUCCESS:
      return [...state, ...action.payload.data];

    case EDIT_DONOR_PENDING:
      return state;

    case EDIT_DONOR_SUCCESS:
      return [...action.payload.data];

    default:
      return state;
  }
}
