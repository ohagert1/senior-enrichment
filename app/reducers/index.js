/* combineReducers is not currently used, but eventually should be for modular code :D */
import axios from 'axios';
import react from 'react';
import { combineReducers } from 'redux';



//WILL NEED TO REFACTOR WITH REACT-REDUX!

//GET STUDENTS AND CAMPUSES


const GET_STUDENTS = 'GET_STUDENTS';

//UPDATE STUDENT

const UPDATE_STUDENT = 'UPDATE_STUDENT';

//ADD NEW STUDENT

const GET_STUDENT = 'GET_STUDENT';
const WRITE_FIRST_NAME = 'WRITE_FIRST_NAME';
const WRITE_LAST_NAME = 'WRITE_LAST_NAME';
const WRITE_EMAIL = 'WRITE_EMAIL';
const WRITE_GPA = 'WRITE_GPA';
const WRITE_CAMPUS = 'WRITE_CAMPUS';






//REMOVE STUDENT

const REMOVE_STUDENT = 'REMOVE_STUDENT';


//INITIAL STATE

const initialState = {
  campuses: [],
  students: [],
  newCampus: {
    name: '',
    imageUrl: '',
    description: ''
  },
  newStudent: {
    firstName: '',
    lastName: '',
    email: '',
    gpa: 0,
    campus: ''
  }
};




export function getStudent(newStudent) {
  return {
    type: GET_STUDENT,
    newStudent: newStudent
  };
}

export function getStudents(students) {
  return {
    type: GET_STUDENTS,
    students: students
  };
}

export function writeFirstName(firstName) {
  return {
    type: WRITE_FIRST_NAME,
    firstName: firstName
  };
}

export function writeLastName(lastName) {
  return {
    type: WRITE_LAST_NAME,
    lastName: lastName
  };
}

export function writeEmail(email) {
  return {
    type: WRITE_EMAIL,
    email: email
  };
}

export function writeGPA(gpa) {
  return {
    type: WRITE_GPA,
    gpa: gpa
  };
}

export function updateStudent(student) {
  return {
    type: UPDATE_STUDENT,
    student: student
  };
}

export function removeStudent(student) {
  return {
    type: REMOVE_STUDENT,
    student: student
  };
}



//THUNK CREATORS

//POST



export function postNewStudent(student, history) {
  return function thunk(dispatch) {
    axios.post('/api/students', student.newStudentData)
      .then(res => res.data)
      .then(newStudent => {
        const action = getStudent(newStudent);
        dispatch(action);
        history.push(`/students/${newStudent.id}`);
      });
  };
}



//UPDATE

export function putStudentUpdate (student, history) {
  return function thunk(dispatch) {
    axios.put('/api/students', student) //not student maybe? nested?
    .then(res => res.data)
    .then(student => {
      const action = updateStudent(student);
      dispatch(action);
      history.push(`/students/${student.id}`);
    });
  };
}



//DELETE

export function deleteStudent(student, history) {
  return function thunk(dispatch) {
    const action = removeStudent(student);
    dispatch(action);
    axios.delete('/api/students', {data: student})
    .then(res => res.data)
    .then(history.push('/students/'));
  };
}


//AJAX (FETCH)

export function fetchStudents () {
  return function thunk(dispatch) {
    axios.get('/api/students')
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

    case GET_STUDENTS:
      newState.students = newState.students.concat(action.students);
      return newState;

    case GET_STUDENT:
      newState.students = newState.students.concat(action.newStudent);
      newState.newStudent = {
        firstName: '',
        lastName: '',
        email: '',
        gpa: 0,
        campus: ''
      };
      return newState;

    case WRITE_FIRST_NAME:
      newState.newStudent.firstName = action.firstName;
      return newState;

    case WRITE_LAST_NAME:
      newState.newStudent.lastName = action.lastName;
      return newState;

    case WRITE_EMAIL:
      newState.newStudent.email = action.email;
      return newState;

    case WRITE_GPA:
      newState.newStudent.gpa = action.gpa;
      return newState;

    case WRITE_CAMPUS:
      newState.newStudent.campus = action.campus;
      return newState;

    case UPDATE_STUDENT:
      let student = newState.students.find((student) => {
        return student.id == action.student.id;
      });
      student = action.student;
      return newState;

    case REMOVE_STUDENT:
      let studentIndex = newState.students.findIndex((student) => {
        return student.id == action.student.id;
      });
      newState.students.splice(studentIndex, 1);
      return newState;

    default:
      return state;
  }

}




