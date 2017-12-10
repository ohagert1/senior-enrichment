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
  <div style={{textAlign: 'center'}}>
    <h1>Students:</h1>
    <NavLink to={'/students/add-new-student'}>
      <RaisedButton>Add New Student</RaisedButton>
    </NavLink>
    <List style={{listStyle: 'none'}}>
      {props.students.map((student) => {
        student.deleting = false;
        return(
          <ListItem key={student.id}>
          <NavLink className='navLink'to={`/students/${student.id}`} style={{textDecoration: 'none'}}>
              <h1>{student.name}
              </h1>
          </NavLink>
          <div style={{padding: '2em'}}>
          <NavLink to={`/students/${student.id}/update`}>
            <RaisedButton>Edit Student</RaisedButton>
          </NavLink>
          </div>
          <div>
          <RaisedButton className='raised-button' onClick={() => {
            props.onDelete(student)}}>Delete Student</RaisedButton>
          </div>
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
        console.log(student.deleting)
        console.log(student);
        dispatch(deleteStudent(student, ownProps.history))
      }
  }
}

const StudentListContainer = connect(null, mapDispatchToProps)(StudentList)

export default StudentListContainer;
