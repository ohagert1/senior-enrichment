/* combineReducers is not currently used, but eventually should be for modular code :D */
import axios from 'axios';
import react from 'react';
import { combineReducers } from 'redux';


//WILL NEED TO REFACTOR WITH REACT-REDUX!

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_STUDENTS = 'GET_STUDENTS';

const initialState = {
  campuses: [],
  students: []
};


//ACTION CREATORS

export function getCampuses(campuses) {
  return {
    type: GET_CAMPUSES,
    campuses: campuses
  };
}

export function getStudents(students) {
  return {
    type: GET_STUDENTS,
    students: students
  };
}


//THUNK CREATORS

export function fetchCampuses () {
  return function thunk(dispatch) {
    return axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => {
      const action = getCampuses(campuses);
      dispatch(action);
    });
  };
}

export function fetchStudents () {
  return function thunk(dispatch) {
    return axios.get('/api/students')
    .then(res => res.data)
    .then(students => {
      const action = getStudents(students);
      dispatch(action);
    });
  };
}


//REDUCER

export default function rootReducer(state = initialState, action) {

  let newState = Object.assign({}, state);

  switch(action.type) {

    case GET_CAMPUSES:
      newState.campuses = newState.campuses.concat(action.campuses);
      return newState;

    case GET_STUDENTS:
      newState.students = newState.students.concat(action.students);
      return newState;

    default:
      return state;
  }
};




