import {
  GET_GIFTS_PENDING,
  GET_GIFTS_SUCCESS
} from '../actions/action_gifts';

let initialState = []
export default(state = initialState, action) => {

  switch (action.type) {
    case GET_GIFTS_PENDING:
    console.log('get pending', action);
      return state;

    case GET_GIFTS_SUCCESS:
    console.log('get success', action);
      return [...action.payload.data];

    default:
      return state;
  }
}
