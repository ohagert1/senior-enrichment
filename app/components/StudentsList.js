'use strict';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {render} from 'react-dom';
import store from '../store';
import {List, ListItem} from 'material-ui/List';

const StudentList = (props) => {
  return(
  <div>
    <h2>Students:</h2>
    <NavLink to={'/students/add-new-student'}>
      <button>Add New Student</button>
    </NavLink>
    <List style={{listStyle: 'none'}}>
      {props.students.map((student) => {
        return(
          <ListItem key={student.id}>
          <NavLink to={`/students/${student.id}`}>
              <h2>{student.name}</h2>
          </NavLink>
          <button>Delete Student</button>
          </ListItem>
        )
        })
      }
    </List>
  </div>
  )
}

export default StudentList;
