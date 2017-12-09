import {
  getStudent,
  writeFirstName,
  writeLastName,
  writeEmail,
  writeGPA,
  writeCampus,
  clearStudent
} from './actionCreators.js';

const WRITE_FIRST_NAME = 'WRITE_FIRST_NAME';
const WRITE_LAST_NAME = 'WRITE_LAST_NAME';
const WRITE_EMAIL = 'WRITE_EMAIL';
const WRITE_GPA = 'WRITE_GPA';
const WRITE_CAMPUS = 'WRITE_CAMPUS';
const CLEAR_STUDENT = 'CLEAR_STUDENT';


//REDUCER

export default function newStudentReducer(state = {
        firstName: '',
        lastName: '',
        email: '',
        gpa: 0,
        campus: ''
      }, action) {

  let newState = Object.assign({}, state);

  switch(action.type) {

    case CLEAR_STUDENT:
      newState = {
        firstName: '',
        lastName: '',
        email: '',
        gpa: 0,
        campus: ''
      };
      return newState;

    case WRITE_FIRST_NAME:
      newState.firstName = action.firstName;
      return newState;

    case WRITE_LAST_NAME:
      newState.lastName = action.lastName;
      return newState;

    case WRITE_EMAIL:
      newState.email = action.email;
      return newState;

    case WRITE_GPA:
      newState.gpa = action.gpa;
      return newState;

    case WRITE_CAMPUS:
      newState.campus = action.campus;
      return newState;

    default:
      return state;
  }

}




