'use strict';

import React, { Component } from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';
import store from '../store';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

const CampusList = function(props) {
    return(
    <div>
      <h2>Campuses:</h2>
      <NavLink to='/campuses/add-new-campus'>
        <button>Add New Campus</button>
      </NavLink>
      <ul style={{listStyle: 'none'}}>
        {props.campuses.map((campus) => {
          return(
            <li key={campus.id} style={{paddingBottom: 5 + "%"}}>
              <div>
                <img src={campus.imageUrl} style={{width: 25 + '%'}}/>
                <NavLink to={`/campuses/${campus.id}`}>
                  <h3>{campus.name}</h3>
                </NavLink>
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

export default CampusList;
