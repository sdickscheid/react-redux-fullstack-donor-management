import {
  GET_SELECTED_DONOR_PENDING,
  GET_SELECTED_DONOR_SUCCESS,
} from '../actions/action_donors';

let initialState = []
export default(state = initialState, action) => {

  switch (action.type) {
    case GET_SELECTED_DONOR_PENDING:
      return state;

    case GET_SELECTED_DONOR_SUCCESS:
      console.log(action.payload.data, "In reducer")
      return action.payload.data;

    default:
      return state;
  }
}
