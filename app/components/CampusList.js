'use strict';

import React, { Component } from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';
import store from '../store';
import { NavLink } from 'react-router-dom';

class CampusList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div>
      <h2>Campuses:</h2>
      <ul style={{listStyle: 'none'}}>
        {this.props.campuses.map((campus) => {
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
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
}

const CampusListContainer = connect(mapStateToProps)(CampusList);

export default CampusListContainer;
