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
import Background, { appendMuiBackground, dark, light } from 'material-ui-background';


const muiTheme = appendMuiBackground(getMuiTheme({
    "palette": {
        "primary3Color": "#212121",
        "primary1Color": "#607d8b",
        "primary2Color": "#fafafa",
        "accent1Color": "#b0bec5",
        "canvasColor": "#424242",
        "borderColor": "rgba(0, 0, 0, 0.5)",
        "disabledColor": "#757575",
        "accent2Color": "#90a4ae",
        "accent3Color": "#546e7a",
        "textColor": "#e8eaf6"
    }
}));

//THE WRAPPER, PROVIDER, & ROUTER
render (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
)
