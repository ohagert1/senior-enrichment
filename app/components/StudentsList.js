'use strict';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {render} from 'react-dom';
import store from '../store';

const StudentList = (props) => {
  return(
  <div>
    <h2>Students:</h2>
    <NavLink to={'/students/add-new-student'}>
      <button>Add New Student</button>
    </NavLink>
    <ul style={{listStyle: 'none'}}>
      {props.students.map((student) => {
        return(
          <li key={student.id}>
          <NavLink to={`/students/${student.id}`}>
              <h2>{student.name}</h2>
          </NavLink>
          </li>
        )
        })
      }
    </ul>
  </div>
  )
}

export default StudentList;
