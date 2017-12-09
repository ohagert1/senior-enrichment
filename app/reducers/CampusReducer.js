import {
  getCampuses,
  getCampus,
  updateCampus,
  removeCampus
} from './actionCreators.js';

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';


//CAMPUS REDUCER

export default function campusReducer(state=[], action) {

  let newState = [...state];

  switch(action.type) {

    case GET_CAMPUSES:
      newState = newState.concat(action.campuses);
      return newState;

     case GET_CAMPUS:
      newState = newState.concat(action.newCampus);
      return newState;

    case UPDATE_CAMPUS:
      let campus = newState.find((campus) => {
        return campus.id == action.campus.id;
      });
      campus = action.campus;
      return newState;

    case REMOVE_CAMPUS:
      let campusIndex = newState.findIndex((campus) => {
        return campus.id == action.campus.id;
      });
      newState.splice(campusIndex, 1);
      return newState;

    default:
      return state;
  }

}
