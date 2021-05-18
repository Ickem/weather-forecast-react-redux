import {CHANGE_INPUT, CLEAR_INPUT} from '../types';

const initialState={
    locationSearchText: ''
};

export const search = (state=initialState, action) => {
    switch(action.type){
        case CHANGE_INPUT:
            return {locationSearchText:action.payload};
        case CLEAR_INPUT:
            return {locationSearchText:''}
        default:
            return state;
    }
};