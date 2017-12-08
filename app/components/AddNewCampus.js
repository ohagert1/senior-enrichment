import { Component } from 'react';
import { connect } from 'react-redux';
import { postNewCampus, writeCampusName, writeCampusDescription, writeCampusImage } from '../store';
import React from 'react';

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
            value={props.campusName}
            onChange={props.onNameChange}
          />
      </div>
      <div className="form-group">
        <label>Campus Description:</label>
          <input
            className="form-control"
            type="text"
            name="campusDescription"
            placeholder="Enter Campus Description"
            value={props.campusDescription}
            onChange={props.onDescriptionChange}
          />
      </div>
      <div className="form-group">
        <label>Campus Image URL:</label>
          <input
            className="form-control"
            type="text"
            name="campusImage"
            placeholder="Paste Campus Image URL"
            value={props.campusImage}
            onChange={props.onImageChange}
          />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function mapStateToProps(state, ownProps) {
  console.log('ownProps',ownProps)
  return {
    campusName: state.newCampus.name,
    campusDescription: state.newCampus.description,
    campusImage: state.newCampus.imageUrl,
    history: ownProps.history
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSubmit: (event) => {
      event.preventDefault();
      dispatch(postNewCampus({
        newCampus: {
          name: event.target.campusName.value,
          description: event.target.campusDescription.value,
          imageUrl: event.target.campusImage.value
        }
      },
      ownProps.history
      ))
    },
    onNameChange: (event) => {
      event.preventDefault();
      dispatch(writeCampusName(event.target.value))
    },
    onDescriptionChange: (event) => {
      event.preventDefault();
      dispatch(writeCampusDescription(event.target.value))
    },
    onImageChange: (event) => {
      event.preventDefault();
      dispatch(writeCampusImage(event.target.value))
    }
  }
}

const AddNewCampusContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewCampus)

export default AddNewCampusContainer;
