/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './src/Main'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{flex: 1}}>
        <Main />
      </View>
    );
  }
}

