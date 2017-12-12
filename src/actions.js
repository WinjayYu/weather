/**
 * Created by billyu on 2017/12/11.
 */

export const GET_CURRENT_CITY = 'GET_CURRENT_CITY';
export const GET_ATTENTION_CITY_LIST = 'GET_ATTENTION_CITY_LIST';
export const GET_COUNTRY_CITY_LIST = 'GET_COUNTRY_CITY_LIST';
export const SET_CITYS_WEATHER = 'SET_CITYS_WEATHER';

export function getCurrentCity(data) {
    return {type: GET_CURRENT_CITY, data};
}

export function getAttentionCityList(data) {
    return {type: GET_ATTENTION_CITY_LIST, data}
}

export function setCitysWeather(data) {
    return {type:　SET_CITYS_WEATHER, data}
}
