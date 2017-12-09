import axios from 'axios';
import react from 'react';



//GET CAMPUSES

const GET_CAMPUSES = 'GET_CAMPUSES';



//ADD NEW CAMPUS

const GET_CAMPUS = 'GET_CAMPUS';
const WRITE_CAMPUS_NAME = 'WRITE_CAMPUS_NAME';
const WRITE_CAMPUS_DESCRIPTION = 'WRITE_CAMPUS_DESCRIPTION';
const WRITE_CAMPUS_IMAGE = 'WRITE_CAMPUS_IMAGE';



//UPDATE CAMPUS

const UPDATE_CAMPUS = 'UPDATE_CAMPUS';


//REMOVE CAMPUS

const REMOVE_CAMPUS = 'REMOVE_CAMPUS';


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

export function removeCampus(campus) {
  return {
    type: REMOVE_CAMPUS,
    campus:campus
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

//DELETE

export function deleteCampus(campus, history) {
  return function thunk(dispatch) {
    const action = removeCampus(campus);
    dispatch(action);
    axios.delete('/api/campuses', {data: campus})
    .then(res => res.data)
    .then(history.push('/campuses/'));
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


//CAMPUS REDUCER

export default function campusReducer(state, action) {

  let newState = Object.assign({}, state);

  switch(action.type) {

    case GET_CAMPUSES:
      newState.campuses = newState.campuses.concat(action.campuses);
      return newState;

     case GET_CAMPUS:
      newState.campuses = newState.campuses.concat(action.newCampus);
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

    case UPDATE_CAMPUS:
      let campus = newState.campuses.find((campus) => {
        return campus.id == action.campus.id;
      });
      campus = action.campus;
      return newState;

    case REMOVE_CAMPUS:
      let campusIndex = newState.campuses.findIndex((campus) => {
        return campus.id == action.campus.id;
      });
      newState.campuses.splice(campusIndex, 1);
      return newState;

    default:
      return newState;
  }

}
