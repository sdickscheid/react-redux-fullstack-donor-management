import axios from 'axios';

export const GET_DONORS_PENDING = 'GET_DONORS_PENDING';
export const GET_DONORS_SUCCESS = 'GET_DONORS_SUCCESS';

export const getAllDonors = () => {
  return async (dispatch) => {
    dispatch({ type: GET_DONORS_PENDING})

    let donors = await axios.get('http://localhost:8000/donorlist')
    dispatch({
      type: GET_DONORS_SUCCESS,
      payload: donors
    })
  }
}
