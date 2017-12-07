import { Component } from 'react';
import { connect } from 'react-redux';
import { writeNewCampus } from '../store';

const AddNewCampus = (props) => {
  return(
    <form onSubmit={props.onSubmit}>
      <div className="form-group">
        <label>Campus Name:</label>
          <input
            className="form-control"
            type="text"
            name="campusName"
            placeholder="Enter Campus Name"
          />
      </div>
      <div className="form-group">
        <label>Campus Description:</label>
          <input
            className="form-control"
            type="text"
            name="campusDescription"
            placeholder="Enter Campus Description"
          />
      </div>
      <div className="form-group">
        <label>Campus Image URL:</label>
          <input
            className="form-control"
            type="text"
            name="campusImage"
            placeholder="Paste Campus Image URL"
          />
      </div>
    </form>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    campusName: state.campusName,
    newCampus: state.newCampus,
    history: ownProps.history
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onNameChange: (event) => {
      dispatch(writeNewCampus({
        newCampus: {
          name: event.target.campusName.value,
          description: event.target.campusDescription.value,
          imageUrl: event.target.campusImage.value
        }
      },
        ownProps.history
      ))
    }
  }
}
