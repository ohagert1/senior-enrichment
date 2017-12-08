/* combineReducers is not currently used, but eventually should be for modular code :D */
import axios from 'axios';
import react from 'react';
import { combineReducers } from 'redux';



//WILL NEED TO REFACTOR WITH REACT-REDUX!

//GET STUDENTS AND CAMPUSES

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_STUDENTS = 'GET_STUDENTS';



//ADD NEW CAMPUS

const GET_CAMPUS = 'GET_CAMPUS';
const WRITE_CAMPUS_NAME = 'WRITE_CAMPUS_NAME';
const WRITE_CAMPUS_DESCRIPTION = 'WRITE_CAMPUS_DESCRIPTION';
const WRITE_CAMPUS_IMAGE = 'WRITE_CAMPUS_IMAGE';



//ADD NEW STUDENT

const GET_STUDENT = 'GET_STUDENT';
const WRITE_FIRST_NAME = 'WRITE_FIRST_NAME';
const WRITE_LAST_NAME = 'WRITE_LAST_NAME';
const WRITE_EMAIL = 'WRITE_EMAIL';
const WRITE_GPA = 'WRITE_GPA';
const WRITE_CAMPUS = 'WRITE_CAMPUS';



//UPDATE CAMPUS

const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const UPDATE_STUDENT = 'UPDATE_STUDENT';


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


//ACTION CREATORS

export function getCampus(newCampus) {
  return {
    type: GET_CAMPUS,
    newCampus: newCampus
  };
}

export function getCampuses(campuses) {
  return {
    type: GET_CAMPUSES,
    campuses: campuses
  };
}

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

export function writeCampusName(campusName) {
  return {
    type: WRITE_CAMPUS_NAME,
    campusName: campusName
  };
}

export function writeCampusDescription(campusDescription) {
  return {
    type: WRITE_CAMPUS_DESCRIPTION,
    campusDescription: campusDescription
  };
}

export function writeCampusImage(campusImage) {
  return {
    type: WRITE_CAMPUS_IMAGE,
    campusImage: campusImage
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

export function writeCampus(campus) {
  return {
    type: WRITE_CAMPUS,
    campus: campus
  };
}

export function updateCampus(campus) {
  return {
    type: UPDATE_CAMPUS,
    campus: campus
  };
}

export function updateStudent(student) {
  return {
    type: UPDATE_STUDENT,
    student: student
  };
}


//THUNK CREATORS

//POST

export function postNewCampus (campus, history) {
  return function thunk(dispatch) {
    axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(newCampus => {
        const action = getCampus(newCampus);
        dispatch(action);
        history.push(`/campuses/${newCampus.id}`);
      });
  };
}

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

export function putCampusUpdate (campus, history) {
  return function thunk(dispatch) {
    axios.put('/api/campuses', campus) //not campus maybe? nested?
    .then(res => res.data)
    .then(campus => {
      const action = updateCampus(campus);
      dispatch(action);
      history.push(`/campuses/${campus.id}`);
    });
  };
}

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

//AJAX (FETCH)

export function fetchCampuses () {
  return function thunk(dispatch) {
    axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => {
      const action = getCampuses(campuses);
      dispatch(action);
    });
  };
}

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

    case GET_CAMPUSES:
      newState.campuses = newState.campuses.concat(action.campuses);
      return newState;

    case GET_STUDENTS:
      newState.students = newState.students.concat(action.students);
      return newState;

    case GET_CAMPUS:
      newState.campuses = newState.campuses.concat(action.newCampus);
      newState.newCampus = {name: '', description: '', imageUrl: ''};
      return newState;

    case WRITE_CAMPUS_NAME:
      newState.newCampus.name = action.campusName;
      return newState;

    case WRITE_CAMPUS_DESCRIPTION:
      newState.newCampus.description = action.campusDescription;
      return newState;

    case WRITE_CAMPUS_IMAGE:
      newState.newCampus.imageUrl = action.campusImage;
      return newState;

    case GET_STUDENT:
      newState.students = newState.students.concat(action.newStudent);
      newState.newStudent = {
        firstName: '',
        lastName: '',
        email: '',
        gpa: 0,
        campus: ''
      }
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

    case UPDATE_CAMPUS:
      let campus = newState.campuses.find((campus) => {
        return campus.id == action.campus.id
      })
      campus = action.campus
      return newState;

    case UPDATE_STUDENT:
      let student = newState.students.find((student) => {
        return student.id == action.student.id
      })
      student = action.student
      return newState;

    default:
      return state;
  }

}




