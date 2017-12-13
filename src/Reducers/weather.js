/**
 * Created by billyu on 2017/12/12.
 */

import {combineReducers} from 'redux';
import {
  GET_CURRENT_CITY,
  GET_ATTENTION_CITY_LIST,
  SET_CITYS_WEATHER,
  REQUEST_CURRENT_CITY
} from '../Actions';

const initialState = {
  isFetching: false,
  isRefreshing: false,
  data: []
}

export function currentCity(state = {isFetching: false, data:[]}, action) {
  switch (action.type) {
    case GET_CURRENT_CITY:
      return {
        ...state,
        isFetching: true,
        data: []
      };
    case REQUEST_CURRENT_CITY:
      return {
        ...state,
        isFetching: false,
        data: action.data
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  currentCity
})

export default rootReducer