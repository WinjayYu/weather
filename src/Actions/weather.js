/**
 * Created by billyu on 2017/12/12.
 */
export const GET_CURRENT_CITY = 'GET_CURRENT_CITY';
export const SET_CITYS_WEATHER = 'SET_CITYS_WEATHER';

import api from '../Services/WeatherApi';

export async function getCurrentCity(data) {
    return dispatch => {
        let data = api.getWeaData();
        dispatch({
            type: GET_CURRENT_CITY,
            data
        })
    };
}

export function setCitysWeather(data) {
    return {type:　SET_CITYS_WEATHER, data}
}
