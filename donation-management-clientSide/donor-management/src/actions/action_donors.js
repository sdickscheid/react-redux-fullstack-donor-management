import axios from 'axios';

export const GET_DONORS_PENDING = 'GET_DONORS_PENDING';
export const GET_DONORS_SUCCESS = 'GET_DONORS_SUCCESS';
export const GET_SELECTED_DONOR_PENDING = 'GET_SELECTED_DONOR_PENDING';
export const GET_SELECTED_DONOR_SUCCESS = 'GET_SELECTED_DONOR_SUCCESS';
export const ADD_DONOR_PENDING = 'ADD_DONOR_PENDING';
export const ADD_DONOR_SUCCESS = 'ADD_DONOR_SUCCESS';
export const REMOVE_DONOR_PENDING = 'REMOVE_DONOR_PENDING';
export const REMOVE_DONOR_SUCCESS = 'REMOVE_DONOR_SUCCESS';
export const EDIT_DONOR_PENDING = 'EDIT_DONOR_PENDING';
export const EDIT_DONOR_SUCCESS = 'EDIT_DONOR_SUCCESS';

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

export const getSelectedDonor = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_SELECTED_DONOR_PENDING})
    let selectedDonor = await axios.get('http://localhost:8000/donor/'+id)
    dispatch({
      type: GET_SELECTED_DONOR_SUCCESS,
      payload: selectedDonor,
      id: id
    })
  }
}

export const addDonor = (newDonor) => {
  return async (dispatch) => {
    dispatch({ type: ADD_DONOR_PENDING })
    let donors = await axios.post('http://localhost:8000/donors/', newDonor)
    dispatch({
      type: ADD_DONOR_SUCCESS,
      payload: donors
    })
  }
}

export const removeDonor = (id) => {
    console.log(id, "running");
  return async (dispatch) => {
    console.log('DISPATCH', removeDonor);
    dispatch({ type: REMOVE_DONOR_PENDING })
    let deletedDonor = await axios.post(`http://localhost:8000/donor/delete/${id}`)
    dispatch({
      type: REMOVE_DONOR_SUCCESS,
      payload: deletedDonor,
    })
  }
}

export const editDonor = (id) => {
  return async (dispatch) => {
    dispatch({ type: EDIT_DONOR_PENDING })
    let donor = await axios.patch(`http://localhost:8000//donor/edit/${id}`)
    dispatch({
      type: EDIT_DONOR_SUCCESS,
      payload: donor
    })
  }
}
