import { Component } from 'react';
import { connect } from 'react-redux';
import store, { putStudentUpdate } from '../store';
import React from 'react';

export default class UpdateStudent extends Component {

  constructor(props) {
    super(props);
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onGPAChange = this.onGPAChange.bind(this);
    this.onCampusChange = this.onCampusChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onFirstNameChange(event) {
    this.student.firstName = event.target.value;
  }

  onLastNameChange(event) {
    this.student.lastName = event.target.value;
  }

  onEmailChange(event) {
    this.student.email = event.target.value;
  }

  onGPAChange(event) {
    this.student.gpa = event.target.value;
  }

  onCampusChange(event) {
    console.log(this.student);
    this.student.CampusId = event.target.value;
  }

  onSubmit(event) {
    event.preventDefault();
    store.dispatch(putStudentUpdate(this.student, this.props.history));
  }

  render() {
    this.student = this.props.students.find((student) => {
      return student.id == this.props.match.params.id;
    });
    if(this.student) {
      return(
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>First Name:</label>
              <input
                className="form-control"
                type="text"
                name="firstName"
                defaultValue={this.student.firstName}
                onChange={this.onNameChange}
              />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
              <input
                className="form-control"
                type="text"
                name="lastName"
                defaultValue={this.student.lastName}
                onChange={this.onDescriptionChange}
              />
          </div>
          <div className="form-group">
            <label>Email:</label>
              <input
                className="form-control"
                type="text"
                name="email"
                defaultValue={this.student.email}
                onChange={this.onDescriptionChange}
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
                defaultValue={this.student.gpa}
                onChange={this.onGPAChange}
              />
          </div>
          <div className="form-group">
            <label>Campus:</label>
              <select name="campusSelect" onChange={this.onCampusChange} defaultValue={this.student.CampusId}>
              {this.props.campuses.map((campus) => {
                return(
                  <option value={campus.id} key={campus.id}>{campus.name}</option>
                )
              })}
              </select>
          </div>
          <button type="submit">Submit Changes</button>
        </form>
      );
    }
    return null;
  }
}