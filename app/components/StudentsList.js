'use strict';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {render} from 'react-dom';
import store from '../store';

const StudentList = (props) => {
  return(
  <div>
    <h2>Students:</h2>
    <ul style={{listStyle: 'none'}}>
      {props.students.map((student) => {
        return(
          <li key={student.id}>
          <NavLink to={`/students/${student.id}`}>
              <span>{student.name}</span>
          </NavLink>
          </li>
        )
        })
      }
    </ul>
  </div>
  )
}

//Remove and refactor the below, pass state via props?

export default StudentList;
