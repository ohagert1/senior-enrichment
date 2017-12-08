'use strict';

import React, { Component } from 'react';
import {render} from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from '../store';
import StudentsList from './StudentsList';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

const SingleCampus = (props) => {

  let campus = props.campuses.find((campus) => campus.id == props.match.params.id);

  if(campus) {
    return(
      <div>
        <h3>{campus.name}</h3>
        <img src={campus.imageUrl} style={{width: 50 + '%'}}/>
        <p>{campus.description}</p>
        <StudentsList
          students={props.students.filter((student) => {
            return student.CampusId == campus.id
          })}
        />
        <NavLink to={`/campuses/${campus.id}/update`}>
        Edit Campus Info
        </NavLink>
      </div>
    );
  }
  return null;
};

export default SingleCampus;
