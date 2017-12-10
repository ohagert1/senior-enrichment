'use strict';

import React, { Component } from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';
import store, { deleteCampus } from '../store';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

const CampusList = function(props) {
    return(
    <div style={{textAlign: 'center'}}>
      <h2 style={{marginLeft: '2em'}}>Campuses:</h2>
      <NavLink to='/campuses/add-new-campus'
      style={{marginLeft: '3.5em'}}>
        <RaisedButton>Add New Campus</RaisedButton>
      </NavLink>
      <ul style={{listStyle: 'none', width: '100%'}}>
        {props.campuses.map((campus) => {
          return(
            <li key={campus.id} style={{margin: "2em", textAlign: 'center'}}>
              <div style={{textAlign: 'center'}}>
                <img src={campus.imageUrl} style={{width: 25 + '%'}}/>
                <div style={{textAlign: 'center'}}>
                <NavLink to={`/campuses/${campus.id}`} style={{textDecoration: 'none', padding: '1em', textAlign: 'center'}}>
                  <h3>{campus.name}</h3>
                </NavLink>
                </div>
                <div style={{textAlign: 'center'}}>
                <NavLink to={`/campuses/${campus.id}/update`} style={{padding: '2em'}}>
                  <RaisedButton className='raised-button'
                  style={{margin: '2em'}}>Edit Campus
                  </RaisedButton>
                </NavLink>
                </div>
                <RaisedButton className='raised-button' onClick={() => {
                  props.onDelete(campus)}}>Delete Campus
                </RaisedButton>
              </div>
              <h4>Description: {campus.description}</h4>
            </li>
          )
          })
        }
      </ul>
    </div>
    )
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onDelete: (campus) => {
      dispatch(deleteCampus(campus, ownProps.history))
    }
  }
}

const CampusListContainer = connect(null, mapDispatchToProps)(CampusList)

export default CampusListContainer;
