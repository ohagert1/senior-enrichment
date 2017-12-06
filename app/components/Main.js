import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home'
import store, { fetchStudents, fetchCampuses } from '../store.js';

export default class Main extends Component {


//GETS DATA FROM DB ON COMPONENT DID MOUNT
  componentDidMount () {
    const studentsThunk = fetchStudents();
    const campusesThunk = fetchCampuses();
    store.dispatch(studentsThunk);
    store.dispatch(campusesThunk);
  }

  render () {
    return (
      <div>
        <Home />
      </div>
    );
  }
}


