'use strict';

import React, { Component } from 'react';
import {render} from 'react-dom';
import store from '../store.js';
import Header from './Header';

export default class  Home extends Component {


//REFACTOR WITH REACT-REDUX
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  render() {
    return(
      <div>
        <Header />
        <h2>Campuses Here</h2>
        <h2>Students Here</h2>
      </div>
    )
  }
}

