'use strict';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {render} from 'react-dom';
import { NavLink } from 'react-router-dom';
import store from '../store.js';
import Header from './Header';
import CampusList from './CampusList';
import StudentsList from './StudentsList';


const Home = () => {

  return(
    <div>
      <NavLink to="/campuses">
        <h2>Campuses</h2>
      </NavLink>
      <NavLink to="/students">
        <h2>Students</h2>
      </NavLink>
    </div>
  )
}

export default Home;
