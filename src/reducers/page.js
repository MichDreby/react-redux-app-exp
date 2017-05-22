import { SET_YEAR } from '../constants/Page';

const initialState = {
    year: 2016,
    photos: []
}

export default function page(state = initialState, action) {
    switch (action.type) {
        case (SET_YEAR):
            let temp = Object.assign ({}, state);
            temp.year = action.payload;
            return temp;
        default:
            return state;
    }
}
