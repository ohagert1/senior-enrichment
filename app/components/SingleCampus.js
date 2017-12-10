'use strict';

import React, { Component } from 'react';
import {render} from 'react-dom';
import { Provider, connect } from 'react-redux';
import store, { deleteCampus } from '../store';
import StudentsList from './StudentsList';
import { NavLink } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import {
  blueGrey500,
  grey300,
  blueGrey50,
  grey100,
  grey500
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey500,
    primary2Color: blueGrey50,
    textColor: grey300,
    accent1Color: grey300,
    accent2Color: grey100,
    accent3Color: grey500,
  }
});

class SingleCampus extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deleting: false
    };
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onDeleteClick(event) {
    this.setState({
      deleting: true
    });
  }

  onCancel(event) {
    this.setState({
      deleting: false
    });
  }

  render() {
    this.campus = this.props.campuses.find((campus) => {
      return campus.id == this.props.match.params.id;
    });
    if(this.campus) {
      return(
        <div>
          <h2>{this.campus.name}</h2>
          <img src={this.campus.imageUrl} style={{width: 50 + '%'}}/>
          <h3>{this.campus.description}</h3>
          <StudentsList
            students={this.props.students.filter((student) => {
              return student.CampusId == this.campus.id
            })}
          />
          <NavLink to={`/campuses/${this.campus.id}/update`}>
          <RaisedButton color={muiTheme.palette.primary2Color}>Edit Campus Info</RaisedButton>
          </NavLink>
          <div>
              <RaisedButton onClick={this.onDeleteClick}>Delete Campus</RaisedButton>
            {
              this.state.deleting && (
                <div>
                  <h4>Do you really want to delete {this.campus.name}?</h4>
                  <RaisedButton onClick={() => {
                    this.props.onDeleteConfirm(this.campus)
                  }}>Delete</RaisedButton>
                  <RaisedButton onClick={this.onCancel}>Cancel</RaisedButton>
                </div>
                )
            }
          </div>
        </div>
      );
    }
    return null;
  }
};

const mapStateToProps = (state) => {
  return{}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDeleteConfirm: (campus) => {
      dispatch(deleteCampus(campus, ownProps.history))
    }
  }
}

const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus)

export default SingleCampusContainer;
