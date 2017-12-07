'use strict';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {render} from 'react-dom';
import store from '../store.js';
import Header from './Header';
import CampusList from './CampusList';
import StudentsList from './StudentsList';

export default class  Home extends Component {


//REFACTOR WITH REACT-REDUX
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  render() {
    return(
      <div>
        <h1>homepage pending</h1>
      </div>
    )
  }
}

