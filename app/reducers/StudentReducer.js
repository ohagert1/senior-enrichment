/* combineReducers is not currently used, but eventually should be for modular code :D */
import axios from 'axios';
import react from 'react';
import { combineReducers } from 'redux';
import {
  getStudents,
  getStudent,
  updateStudent,
  removeStudent
} from './actionCreators.js';


const GET_STUDENT = 'GET_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';

//REDUCER

export default function studentReducer(state=[], action) {

  let newState = [...state];

  switch(action.type) {

    case GET_STUDENTS:
      newState = newState.concat(action.students);
      return newState;

    case GET_STUDENT:
      newState = newState.concat(action.newStudent);
      return newState;

    case UPDATE_STUDENT:
      let student = newState.find((student) => {
        return student.id == action.student.id;
      });
      student = action.student;
      return newState;

    case REMOVE_STUDENT:
      let studentIndex = newState.findIndex((student) => {
        return student.id == action.student.id;
      });
      console.log()
      newState.splice(studentIndex, 1);
      return newState;

    default:
      return state;
  }

}




