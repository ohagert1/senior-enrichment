'use strict';

import React, { Component } from 'react';
import {render} from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from '../store';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

const SingleStudent = (props) => {
  let student = props.students.find((student) => student.id == props.match.params.id);
  let campus = props.campuses.find((campus) => campus.id == student.CampusId);
  if(student && campus) {
    return(
      <div>
        <h3>{student.name}</h3>
        <h4>Campus:</h4>
        <NavLink to={`/campuses/${campus.id}`}>
        {campus.name}
        </NavLink>
      </div>
  );
  }
  return null;
};



export default SingleStudent
