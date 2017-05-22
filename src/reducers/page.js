// import { SET_YEAR } from '../constants/Page';
import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../constants/Page';

const initialState = {
    year: 2016,
    photos: [],
    fetching: false
}

export default function page(state = initialState, action) {
    let temp;
    switch (action.type) {
        case (GET_PHOTOS_REQUEST):
            temp = Object.assign ({}, state);
            temp.year = action.payload;
            temp.fetching = true;
            return temp;
        case (GET_PHOTOS_SUCCESS):
            temp = Object.assign ({}, state);
            temp.photos = action.payload;
            temp.fetching = false;
            return temp;
        default:
            return state;
    }
}
