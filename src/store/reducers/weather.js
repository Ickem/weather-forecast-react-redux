import {FETCH_DATA_FULFILLED, FETCH_DATA_REJECTED} from '../types';

const initialState = {
    isFetchedData: false,
    isLoadingData: true,
};

export const weather = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_FULFILLED:
            return{
                ...state,
                ...action.data,
                isLoadingData: false,
                isFetchedData: true
            };
        case FETCH_DATA_REJECTED:
            return{
                ...state,
                isLoadingData: false,
                isFetchedData: false,
                error: action.payload.message
            };
        default:
            return state;
    }
};