/**
 * Created by winjayyu on 2017/12/4.
 */
import React, { Component } from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import api from './Services/WeatherApi'
import Images from './Images'
import TodayWeather from './Components/TodayWeather';
import Forecast from './Components/Forecast';
import styles from './Styles';


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
    api().then(data => {
      self.setState({status: data, isLoading: false});
    });

  }

  componentWillMount() {
    this.getData();
  }

  render () {
    return (
        <View style={styles.mainContainer}>
            <Image source={Images.weatherBackground} style={styles.backgroundImage} resizeMode='stretch'/>
            <TodayWeather status={this.state.status} isLoading={this.state.isLoading}/>
            <Forecast status={this.state.status} isLoading={this.state.isLoading}/>
        </View>
    )
  }
}