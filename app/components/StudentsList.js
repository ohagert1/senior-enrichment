'use strict';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {render} from 'react-dom';
import store, { deleteStudent } from '../store';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

const StudentList = (props) => {
  return(
  <div>
    <h1>Students:</h1>
    <NavLink to={'/students/add-new-student'}>
      <RaisedButton>Add New Student</RaisedButton>
    </NavLink>
    <List style={{listStyle: 'none'}}>
      {props.students.map((student) => {
        return(
          <ListItem key={student.id}>
          <NavLink to={`/students/${student.id}`}>
              <h1>{student.name}
              </h1>
          </NavLink>
          <RaisedButton className='raised-button' onClick={() => {props.onDelete(student)}}>Delete Student</RaisedButton>
          </ListItem>
        )
        })
      }
    </List>
  </div>
  )
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
      onDelete: (student) => {
        console.log(student);
        dispatch(deleteStudent(student, ownProps.history))
      }
  }
}

const StudentListContainer = connect(null, mapDispatchToProps)(StudentList)

export default StudentListContainer;
