/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './src/Main';
import configureStore from './src/Store/configureStore';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Main />
        </View>
      </Provider>
    );
  }
}

