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
      <h1>Welcome to Fullstack Intergalactic!</h1>
      <img src="https://astrologyking.com/wp-content/uploads/andromeda-galaxy.jpg"/>
    </div>
  )
}

export default Home;
