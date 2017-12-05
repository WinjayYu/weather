import React from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native'
import globalStyle from '../Styles'

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

    if (this.props.isLoading) {
      return null;
    }

    let now = this.props.status.weather[0].now;
    let cityName = this.props.status.weather[0].city_name;

    return (
      <View style={[styles.container, globalStyle.globalPadding]} >
        <Text style={globalStyle.globalTextColor}>{cityName}</Text>
        <Text style={[{fontSize: 80}, globalStyle.globalTextColor]}>{now.temperature}°</Text>
        <Text style={globalStyle.globalTextColor}>{now.text} | {now.air_quality.city.quality} {now.air_quality.city.pm25}</Text>
        <View style={[styles.bottomView, globalStyle.globalPadding]}>
          <View style={styles.bottomSubView}>
            <Text style={styles.bottomText}>{now.wind_direction}风</Text>
            <Text style={styles.bottomText}>{now.wind_scale}级</Text>
          </View>
          <View style={styles.bottomSubView}>
            <Text style={styles.bottomText}>相对湿度</Text>
            <Text style={styles.bottomText}>{now.humidity}%</Text>
          </View>
          <View>
            <Text style={styles.bottomText}>体感温度</Text>
            <Text style={styles.bottomText}>{now.feels_like}°C</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    height: 300,
    backgroundColor: 'skyblue',
    paddingTop: 20
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 30
  },
  bottomSubView: {
    flex: 0.33,
    borderRightWidth: 1,
    borderRightColor: '#eee',

  },
  bottomText: {
    textAlign: 'center',
    color: '#fff'
  }
})
