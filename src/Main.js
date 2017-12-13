/**
 * Created by winjayyu on 2017/12/4.
 */
import React, { Component } from 'react';
import { Text, Image, View, ScrollView, StyleSheet, RefreshControl} from 'react-native';
import api from './Services/WeatherApi'
import Images from './Images'
import TodayWeather from './Components/TodayWeather';
import Forecast from './Components/Forecast';
import Suggestion from './Components/Suggestion';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      status: '',
      isLoading: true
    };
  }

  getData() {
    let self = this;
    api.getWeaData().then(data => {
      self.setState({status: data, isLoading: false});
    });

  }

  componentWillMount() {
    this.getData();
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView

        >
          <TodayWeather />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});