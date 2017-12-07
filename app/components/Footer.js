import React, { Component } from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';

export default class Footer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div>
      <h1>THIS IS A FOOTER</h1>
    </div>
    )
  }

}
