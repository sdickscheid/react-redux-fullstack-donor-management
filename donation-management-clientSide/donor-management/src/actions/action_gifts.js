import axios from 'axios';

export const GET_GIFTS_PENDING = 'GET_GIFTS_PENDING';
export const GET_GIFTS_SUCCESS = 'GET_GIFTS_SUCCESS';

export const getAllDonorGifts = () => {
  return async (dispatch) => {
    dispatch({ type: GET_GIFTS_PENDING})

    let donors = await axios.get('http://localhost:8000/donorlist')
    dispatch({
      type: GET_GIFTS_SUCCESS,
      payload: donors
    })
  }
}
