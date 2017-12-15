import axios from 'axios';

export const GET_DONORS_PENDING = 'GET_DONORS_PENDING';
export const GET_DONORS_SUCCESS = 'GET_DONORS_SUCCESS';
export const GET_SELECTED_DONOR_PENDING = 'GET_SELECTED_DONOR_PENDING';
export const GET_SELECTED_DONOR_SUCCESS = 'GET_SELECTED_DONOR_SUCCESS';

export const getAllDonors = () => {
  return async (dispatch) => {
    console.log("test *****&******");
    dispatch({ type: GET_DONORS_PENDING})

    let donors = await axios.get('http://localhost:8000/donorlist')
    dispatch({
      type: GET_DONORS_SUCCESS,
      payload: donors
    })
  }
}

export const getSelectedDonor = (id) => {
  console.log(id, "running");
  return async (dispatch) => {
    console.log("ASDasdasDasdå");
    dispatch({ type: GET_SELECTED_DONOR_PENDING})
    let selectedDonor = await axios.get('http://localhost:8000/donor/'+id)
    dispatch({
      type: GET_SELECTED_DONOR_SUCCESS,
      payload: selectedDonor,
      id: id
    })
  }
}
