/**
 * Created by billyu on 2017/12/11.
 */
import { combineReducers } from 'redux';

import {
    GET_CURRENT_CITY,
    GET_ATTENTION_CITY_LIST,
    SET_CITYS_WEATHER
} from './actions';

export function currentCity(state={}, action) {
    switch (action.type){
        case GET_CURRENT_CITY:
            return action.currentCity;
        default:
            return state;
    }
}
