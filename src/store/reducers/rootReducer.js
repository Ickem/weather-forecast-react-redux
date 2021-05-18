import {combineReducers} from 'redux';
import {weather} from './weather';
import {search} from './search';


export const rootReducer = combineReducers({weather, search});