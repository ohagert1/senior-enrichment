import { Component } from 'react';
import { connect } from 'react-redux';
import {
        writeFirstName,
        writeLastName,
        writeEmail,
        writeGPA,
        writeCampus,
        postNewStudent
      } from '../store';
import React from 'react';

const AddNewStudent = (props) => {
  return(
    <form onSubmit={props.onSubmit}>
      <div className="form-group">
        <label>First Name:</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={props.firstName}
            onChange={props.onFirstNameChange}
          />
      </div>
      <div className="form-group">
        <label>Last Name:</label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={props.lastName}
            onChange={props.onLastNameChange}
          />
      </div>
      <div className="form-group">
        <label>Email:</label>
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="email"
            value={props.studentEmail}
            onChange={props.onEmailChange}
          />
      </div>
      <div className="form-group">
        <label>GPA:</label>
          <input
            className="form-control"
            type="number"
            step="0.01"
            name="gpa"
            placeholder="GPA"
            value={props.gpa}
            onChange={props.onGPAChange}
          />
      </div>
      <div className="form-group">
        <label>Campus:</label>
          <select name="campusSelect" onChange={props.onCampusChange}>
          {props.campuses.map((campus) => {
            return(
              <option value={campus.id} key={campus.id}>{campus.name}</option>
            )
          })}
          </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    campuses: state.campuses,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSubmit: (event) => {
      event.preventDefault();
      dispatch(postNewStudent({
        newStudentData: {
          newStudent: {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            email: event.target.email.value,
            gpa: event.target.gpa.value,
          },
          campus: event.target.campusSelect.value
        }
      },
      ownProps.history
      ))
    },
    onFirstNameChange: (event) => {
      event.preventDefault();
      dispatch(writeFirstName(event.target.value))
    },
    onLastNameChange: (event) => {
      event.preventDefault();
      dispatch(writeLastName(event.target.value))
    },
    onEmailChange: (event) => {
      event.preventDefault();
      dispatch(writeEmail(event.target.value))
    },
    onGPAChange: (event) => {
      event.preventDefault();
      dispatch(writeGPA(event.target.value))
    },
    onCampusChange: (event) => {
      event.preventDefault();
      dispatch(writeCampus(event.target.value))
    }
  }
}

const AddNewStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewStudent)

export default AddNewStudentContainer;
