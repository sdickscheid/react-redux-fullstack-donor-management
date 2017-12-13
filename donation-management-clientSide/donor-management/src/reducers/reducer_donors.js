import {
  GET_DONORS_PENDING,
  GET_DONORS_SUCCESS
} from '../actions/action_donors';

let initialState = []
export default(state = initialState, action) => {

  switch (action.type) {
    case GET_DONORS_PENDING:
    console.log('get pending', action);
      return state;

    case GET_DONORS_SUCCESS:
    console.log('get success', action);
      return [...action.payload.data];

    default:
      return state;
  }
}
