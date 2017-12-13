/**
 * Created by billyu on 2017/12/12.
 */
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  weather: require('./weather')
});

export default rootReducer