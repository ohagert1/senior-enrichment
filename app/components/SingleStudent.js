'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import store, { deleteStudent } from '../store';
import { NavLink } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';


class SingleStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleting: false
    };
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onDeleteClick(event) {
    this.setState({
      deleting: true
    });
  }

  onCancel(event) {
    this.setState({
      deleting: false
    });
  }

  render() {
    this.student = this.props.students.find((student) => student.id == this.props.match.params.id);
    this.campus = this.props.campuses.find((campus) => campus.id == this.student.CampusId);
    if(this.student && this.campus) {
      return(
        <div>
          <h2>Student:</h2>
          <h3>{this.student.name}</h3>
          <h4>{this.student.email}</h4>
          <h4>GPA: {this.student.gpa}</h4>
          <NavLink to={`/students/${this.student.id}/update`}>
            <RaisedButton>Edit Student Info</RaisedButton>
          </NavLink>
          <div>
              <RaisedButton onClick={this.onDeleteClick}>Delete Student</RaisedButton>
            {
              this.state.deleting && (
                <div>
                  <h4>Do you really want to delete {this.student.name}?</h4>
                  <RaisedButton onClick={() => {
                    this.props.onDeleteConfirm(this.student)
                  }}>Delete</RaisedButton>
                  <RaisedButton onClick={this.onCancel}>Cancel</RaisedButton>
                </div>
                )
            }
          </div>
          <h3>Campus:</h3>
          <NavLink to={`/campuses/${this.campus.id}`}>
            <RaisedButton>{this.campus.name}</RaisedButton>
          </NavLink>
        </div>
    );
    }
    return null;
  }
};

const mapStateToProps = (state) => {
  return{}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDeleteConfirm: (student) => {
      console.log(student);
      dispatch(deleteStudent(student, ownProps.history))
    }
  }
}

const SingleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent)

export default SingleStudentContainer
