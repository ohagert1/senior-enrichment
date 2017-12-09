import {
  getCampus,
  writeCampusName,
  writeCampusDescription,
  writeCampusImage
} from './actionCreators.js';

const GET_CAMPUS = 'GET_CAMPUS';
const WRITE_CAMPUS_NAME = 'WRITE_CAMPUS_NAME';
const WRITE_CAMPUS_DESCRIPTION = 'WRITE_CAMPUS_DESCRIPTION';
const WRITE_CAMPUS_IMAGE = 'WRITE_CAMPUS_IMAGE';


export default function newCampusReducer(state={
    name: '',
    imageUrl: '',
    description: ''
  }, action) {

  let newState = Object.assign({}, state);

  switch(action.type) {

    //rename?? maybe unable to have 2 action creators with same name
    //(other is in campusReducer)
     case GET_CAMPUS:
      newState = {name: '', description: '', imageUrl: ''};
      return newState;

    case WRITE_CAMPUS_NAME:
      newState.name = action.campusName;
      return newState;

    case WRITE_CAMPUS_DESCRIPTION:
      newState.description = action.campusDescription;
      return newState;

    case WRITE_CAMPUS_IMAGE:
      newState.imageUrl = action.campusImage;
      return newState;

    default:
      return state;
  }

}
