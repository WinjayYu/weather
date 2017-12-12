/**
 * Created by billyu on 2017/12/12.
 */


import {
  GET_CURRENT_CITY,
  GET_ATTENTION_CITY_LIST,
  SET_CITYS_WEATHER
} from '../Actions';

const initialState = {
  isFetching: false,
  isRefreshing: false,
  data: []
}

export function currentCity(state = {}, action) {
  switch (action.type) {
    case GET_CURRENT_CITY:
      return {
        ...state,
        isLoading: false,
        isRefreshing: false,
        data: action.data
      };
    default:
      return state;
  }
}