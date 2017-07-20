import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import HomeScreen from './HomeScreen';

class ReactNativeWeb extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeScreen />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit src/AppContainer.js!
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default ReactNativeWeb;
