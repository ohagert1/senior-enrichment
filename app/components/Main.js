import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import store, { fetchStudents, fetchCampuses } from '../store.js';
import { withRouter } from 'react-router';
import Home from './Home';
import StudentsList from './StudentsList';
import CampusList from './CampusList';
import Header from './Header';
import Footer from './Footer';
import SingleStudent from './SingleStudent';
import SingleCampus from './SingleCampus';
import { Provider, connect } from 'react-redux';


class Main extends Component {

  constructor(props) {
    super(props);
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
              path="/students/:id"
              render={(props) => (
                <SingleStudent {...props}
                  students={this.props.students}
                  campuses={this.props.campuses}
                />)
              }
            />
            <Route path="/campuses/:id" render={(props) => <SingleCampus {...props}/>}/>
            <Route path="/students" render={(props) => <StudentsList {...props} students={this.props.students}/>}/>
            <Route path="/campuses" component={CampusList} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <Footer />
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



