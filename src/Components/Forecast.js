import React from 'react';
import {ScrollView, Text, Image, View, TouchableOpacity} from 'react-native'
import styles from '../Containers/Styles/LaunchScreenStyles'
import { Images } from '../Themes'

export default class TodayWeather extends React.Component {
  _forecastList(item, idx){
    return (
      <View style={styles.cardButton} key={idx}>
          <Text style={[styles.cardText, styles.marginTop20]}>{item.day}</Text>
        <Image source={Images.sun} style={styles.cardImg}/>
        <View style={styles.textView}>
          <Text style={styles.temperatureText}>{item.high}-{item.low}</Text>
          {/*<Text style={{color: '#fff'}}>°</Text>*/}
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
      <View style={styles.card}>
        {future.slice(1, 5).map(this._forecastList)}
      </View>
    )
  }
}
