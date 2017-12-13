/**
 * Created by billyu on 2017/12/12.
 */
export const GET_CURRENT_CITY = 'GET_CURRENT_CITY';
export const SET_CITYS_WEATHER = 'SET_CITYS_WEATHER';
export const REQUEST_CURRENT_CITY = 'REQUEST_CURRENT_CITY';

import api from '../Services/WeatherApi';

export async function getCurrentCity() {
    return async (dispatch) => {
        dispatch({type: GET_CURRENT_CITY});
        let data = await api.getWeaData();
        if(data) {
            dispatch(
              {
                  type: REQUEST_CURRENT_CITY,
                  data,
              }
            )
        }
    };
}

export function setCitysWeather(data) {
    return {type:　SET_CITYS_WEATHER, data}
}
