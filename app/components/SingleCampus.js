'use strict';

import React, { Component } from 'react';
import {render} from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from '../store';
import StudentsList from './StudentsList'

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
      </div>
    );
  }
  return null;
};

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

const SingleCampusContainer = connect(mapStateToProps)(SingleCampus);

export default SingleCampusContainer;
