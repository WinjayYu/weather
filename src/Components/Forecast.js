import React from 'react';
import {ScrollView, Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native'
import Images from '../Images'
import api from '../Services/WeatherApi'
import globalStyle from '../Styles'

export default class TodayWeather extends React.Component {
  _forecastList(item, idx){
    return (
      <View style={styles.card}>
        <Text>{item.day}</Text>
        <View style={{height: 60, flexDirection: "row", alignContent: "center", alignItems:"center"}}>
          <Image style={{width: 50, height: 50}} source={{uri: api.getIcons(item.code1)}}/>
          <Text> {item.text}</Text>
        </View>
        <View >
          <Text >{item.high}°/{item.low}°</Text>
        </View>
      </View>
    )
  }

  render() {
    if(this.props.isLoading) {
      return null;
    }
    let future = this.props.status.weather[0].future;
    return (
      <View style={[styles.container, globalStyle.globalPadding]}>
        {future.slice(0, 5).map(this._forecastList)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  }

})