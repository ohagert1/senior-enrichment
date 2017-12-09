'use strict';

import React, { Component } from 'react';
import {render} from 'react-dom';
import { Provider, connect } from 'react-redux';
import store, { deleteStudent } from '../store';
import { NavLink } from 'react-router-dom';

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
          <h3>{this.student.name}</h3>
          <NavLink to={`/students/${this.student.id}/update`}>
          Edit Student Info
          </NavLink>
          <div>
              <button onClick={this.onDeleteClick}>Delete Student</button>
            {
              this.state.deleting && (
                <div>
                  <h4>Do you really want to delete {this.student.name}?</h4>
                  <button onClick={() => {
                    this.props.onDeleteConfirm(this.student)
                  }}>Delete</button>
                  <button onClick={this.onCancel}>Cancel</button>
                </div>
                )
            }
          </div>
          <h4>Campus:</h4>
          <NavLink to={`/campuses/${this.campus.id}`}>
          {this.campus.name}
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
