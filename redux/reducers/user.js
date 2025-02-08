import * as actions from "../constants";

const initialState = {
    currentUserData: null,
};

export const userData = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_USER_DATA:
            return {
                ...state,
                currentUserData: action.payload,  // Use payload here
            };
        case actions.LOAD_USER_DATA:
            return {
                ...state,
                currentUserData: action.payload,  // Use payload here
            };
        case actions.CLEAR_USER_DATA:
            return {
                ...state,
                currentUserData: null
            }
        default:
            return state;
    }
};