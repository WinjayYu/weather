/**
 * Created by winjayyu on 2017/12/6.
 */
import  React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import globalStyle from '../Styles';


export default class Suggestion extends Component {
  _viewList(item, idx) {
    return (
      <View key={idx} style={[styles.itemView, globalStyle.globalPadding]}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>{suggestionObj[item.key]}</Text>
          <Text>    {item.brief}</Text>
        </View>
          <Text style={styles.content}>{item.details}</Text>
      </View>
    )
  }

  render() {
    if(this.props.isLoading) {
      return null;
    }

    let suggestion = this.props.status.weather[0].today.suggestion;
    let arr = [];
    for(const key in suggestion) {
      let obj = {};
      obj.key = key;
      obj.brief = suggestion[key].brief;
      obj.details = suggestion[key].details;
      arr.push(obj);
    }
    return (
      <View style={styles.container}>
          {arr.map(this._viewList)}
      </View>
    );
  }
}

const suggestionObj = {
  dressing: '穿衣',
  uv: '紫外线',
  car_washing: '洗车',
  travel: '旅游',
  flu: '感冒预防',
  sport: '运动'
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemView: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  content: {
    lineHeight: 25
  },
  noBorderBottom: {
    paddingTop: 10,
    paddingBottom: 10,
  }
});