



export default function newCampusReducer(state={
    name: '',
    imageUrl: '',
    description: ''
  }, action) {

  let newState = Object.assign({}, state);

  switch(action.type) {

     case GET_CAMPUS:
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

    default:
      return newState;
  }

}


{}
