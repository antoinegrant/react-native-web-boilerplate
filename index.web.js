/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {render} from 'react-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello world!!</h1>
      </div>
    );
  }
}

render(<App />, document.getElementById('react-app'));
