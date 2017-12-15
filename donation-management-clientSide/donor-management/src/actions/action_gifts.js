import axios from 'axios';

export const GET_GIFTS_PENDING = 'GET_GIFTS_PENDING';
export const GET_GIFTS_SUCCESS = 'GET_GIFTS_SUCCESS';

export const getAllDonorGifts = () => {
  return async (dispatch) => {
    console.log('DISPATCH GET GIFTS', "PENDING");
    dispatch({ type: GET_GIFTS_PENDING})

    let gifts = await axios.get('http://localhost:8000/giftlist')
    console.log('DISPATCH GET GIFTS', "SUCCESS");
    dispatch({
      type: GET_GIFTS_SUCCESS,
      payload: gifts
    })
  }
}
