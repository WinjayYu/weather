import React from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import styles from '../Styles'

export default class TodayWeather extends React.Component{
  constructor() {
    super();
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {

    if(this.props.isLoading) {
      return null;
    }

      return (
        <View style={styles.todayWea}>
          <Text style={[styles.temperatureText, styles.marginTop20]}>{this.props.status.weather[0].now.text}</Text>
          <View style={[styles.textView, styles.MarginTop0]}>
            <Text style={[styles.temperatureText, styles.TopTemperatureTextSizeAndColor, styles.marginLeft10]}>
              {this.props.status.weather[0].now.temperature}°
            </Text>
          </View>
          <Text style={styles.temperatureText}>{this.props.status.weather[0].city_name}</Text>
          <Text style={styles.dayText}>Today, {this.state.date.toLocaleTimeString()}</Text>
        </View>
      )
  }
}

