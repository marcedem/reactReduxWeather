import axios from 'axios';

const API_KEY = 'f7e0de7e479713428584bb036d708e5a';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    
    const url = `${ROOT_URL}&units=metric&q=${city},fr`;
    const request = axios.get(url);  //axios is responsible for ajax request

    //console.log('Request: ', request); 

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}