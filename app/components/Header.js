'use strict';

import React, { Component } from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import { NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


const Header = () => {

  return(
    <AppBar
      iconElementLeft={
        <div>
        <NavLink to="/">
          <FlatButton>Home</FlatButton>
        </NavLink>
        <NavLink to="/students">
          <FlatButton>Students</FlatButton>
        </NavLink>
        <NavLink to="/campuses">
          <FlatButton>Campuses</FlatButton>
        </NavLink>
        </div>}
    />
  )
}

export default Header;
