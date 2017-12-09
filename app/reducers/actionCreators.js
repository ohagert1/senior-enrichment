import axios from 'axios';

const GET_STUDENT = 'GET_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';
const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
const WRITE_FIRST_NAME = 'WRITE_FIRST_NAME';
const WRITE_LAST_NAME = 'WRITE_LAST_NAME';
const WRITE_EMAIL = 'WRITE_EMAIL';
const WRITE_GPA = 'WRITE_GPA';
const WRITE_CAMPUS = 'WRITE_CAMPUS';
const WRITE_CAMPUS_NAME = 'WRITE_CAMPUS_NAME';
const WRITE_CAMPUS_DESCRIPTION = 'WRITE_CAMPUS_DESCRIPTION';
const WRITE_CAMPUS_IMAGE = 'WRITE_CAMPUS_IMAGE';
const CLEAR_STUDENT = 'CLEAR_STUDENT';

export function getStudent(newStudent) {
  return {
    type: GET_STUDENT,
    newStudent: newStudent
  };
}

export function clearStudent() {
  return {
    type: CLEAR_STUDENT,
  };
}

export function getStudents(students) {
  return {
    type: GET_STUDENTS,
    students: students
  };
}

export function getCampuses(campuses) {
  return {
    type: GET_CAMPUSES,
    campuses: campuses
  };
}

export function getCampus(newCampus) {
  return {
    type: GET_CAMPUS,
    newCampus: newCampus
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

export function updateStudent(student) {
  return {
    type: UPDATE_STUDENT,
    student: student
  };
}


export function updateCampus(campus) {
  return {
    type: UPDATE_CAMPUS,
    campus: campus
  };
}

export function removeStudent(student) {
  return {
    type: REMOVE_STUDENT,
    student: student
  };
}

export function removeCampus(campus) {
  return {
    type: REMOVE_CAMPUS,
    campus:campus
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
        const actionGetStudent = getStudent(newStudent);
        const actionClearStudent = clearStudent()
        dispatch(actionGetStudent);
        dispatch(actionClearStudent);
        history.push(`/students/${newStudent.id}`);
      });
  };
}

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

export function deleteStudent(student, history) {
  return function thunk(dispatch) {
    const action = removeStudent(student);
    dispatch(action);
    axios.delete('/api/students', {data: student})
    .then(res => res.data)
    .then(history.push('/students/'));
  };
}

export function deleteCampus(campus, history) {
  return function thunk(dispatch) {
    const action = removeCampus(campus);
    dispatch(action);
    axios.delete('/api/campuses', {data: campus})
    .then(res => res.data)
    .then(history.push('/campuses/'));
  };
}
