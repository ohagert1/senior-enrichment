'use strict';

import React, { Component } from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';

const Header = () => {

  return(
    <div>
      <h1>Welcome to Fullstack Intergalactic</h1>
    </div>
  )

}

export default Header;
