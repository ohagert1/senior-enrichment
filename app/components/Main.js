'use strict';

import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import store, { fetchStudents, fetchCampuses } from '../store.js';
import { withRouter } from 'react-router';
import Home from './Home';
import StudentsList from './StudentsList';
import CampusList from './CampusList';
import Header from './Header';
import SingleStudent from './SingleStudent';
import SingleCampus from './SingleCampus';
import AddNewCampus from './AddNewCampus';
import AddNewStudent from './AddNewStudent';
import UpdateCampus from './UpdateCampus';
import UpdateStudent from './UpdateStudent';
import { Provider, connect } from 'react-redux';



class Main extends Component {

  constructor() {
    super();
  }

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
        <Header />
        <main>
          <Switch>
            <Route
              path="/students/add-new-student"
              render={(props) => (
              <AddNewStudent {...props}
              />)
            }
            />
            <Route
              path="/campuses/add-new-campus"
              render={(props) => (
              <AddNewCampus {...props}
              />)
            }
            />
            <Route
              path="/campuses/:id/update"
              render={(props) => (
                <UpdateCampus {...props}
                  campuses = {this.props.campuses}
                />)
              }
            />
            <Route
              path="/students/:id/update"
              render={(props) => (
                <UpdateStudent {...props}
                  campuses = {this.props.campuses}
                  students = {this.props.students}
                />)
              }
            />
            <Route
              path="/campuses/:id"
              render={(props) => (
                <SingleCampus {...props}
                  students={this.props.students}
                  campuses={this.props.campuses}
                />)
              }
            />
            <Route
              path="/students/:id"
              render={(props) => (
                <SingleStudent {...props}
                  students={this.props.students}
                  campuses={this.props.campuses}
                />)
              }
            />
            <Route
              path="/students"
              render={(props) => (
                <StudentsList {...props} students={this.props.students}
                />)
              }
            />
            <Route
              path="/campuses"
              render={(props) => (
                <CampusList {...props} campuses={this.props.campuses}
                />)
              }
            />
            <Route
              path="/"
              component={Home}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students,
    campuses: state.campuses
  }
}

const MainContainer = withRouter(connect(mapStateToProps)(Main));

export default MainContainer;



