import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import AppContainer from './src/AppContainer';

class AwesomeProject extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
