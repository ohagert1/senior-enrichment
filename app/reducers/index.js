/* combineReducers is not currently used, but eventually should be for modular code :D */
import axios from 'axios';
import react from 'react';
import { combineReducers } from 'redux';
import studentReducer from './studentReducer';
import campusReducer from './campusReducer';
import newCampusReducer from './newCampusReducer';
import newStudentReducer from './newStudentReducer';

const rootReducer = combineReducers({
  campuses: campusReducer,
  students: studentReducer,
  newStudent: newStudentReducer,
  newCampus: newCampusReducer
});

export default rootReducer;
export * from './actionCreators';

