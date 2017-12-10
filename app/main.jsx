'use strict';

// import 'index.scss';

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';


//THE WRAPPER, PROVIDER, & ROUTER
render (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Provider store={store}>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
)
