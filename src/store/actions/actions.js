import {FETCH_DATA_FULFILLED, FETCH_DATA_REJECTED,CHANGE_INPUT, CLEAR_INPUT} from '../types';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export function getLocation(pos) {
    return (dispatch)=> {
        const API_URL = 'http://api.openweathermap.org/geo/1.0/reverse';
        const cityLink = API_URL + `?lat=${pos.latitude}&lon=${pos.longitude}&limit=1&appid=${API_KEY}`;

        fetch(cityLink)
            .then(res => res.ok ? res : Promise.reject(res))
            .then(res => res.json())
            .then(data => dispatch(getFetchData(data[0].name)))
            .catch(() => dispatch(getDataFetchError()));

    };
}

export function getFetchData(city) {
    return (dispatch)=> {
        const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
        const URL = API_URL + `?q=${city}&appid=${API_KEY}&units=metric`;

        fetch(URL)
            .then(res => res.ok ? res : Promise.reject(res))
            .then(res => res.json())
            .then(data =>  dispatch(getDefaultForecast(data)))
            .catch(() => dispatch(getDataFetchError()));
    };
}

export function getDefaultForecast(data){
    return{
        type: FETCH_DATA_FULFILLED,
        data
    }
}

export function getDataFetchError(){
    return{
        type: FETCH_DATA_REJECTED,
        payload: new Error('Error loading data from server. Please try reloading the page or try again later.')
    }
}

export function handleInputChange(value){
    return{
        type: CHANGE_INPUT,
        payload: value
    }
}

export function clearInput(){
    return{
        type: CLEAR_INPUT
    }
}