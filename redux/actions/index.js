import * as actions from '../constants';
import {getUserDataFromSecureStore, removeUserDataFromSecureStore, saveUserDataToSecureStore } from '../secureStore'; // import your keychain helpers

export const setUserData = (userData) => async (dispatch) => {
    await saveUserDataToSecureStore(userData);  // Store token in SecureStore
    dispatch({
        type: actions.SET_USER_DATA,
        payload: userData,  // Use payload
    });
};

export const clearUserData = () => async (dispatch) => {
    await removeUserDataFromSecureStore();  // Remove token from SecureStore
    dispatch({
        type: actions.CLEAR_USER_DATA,
    });
};

export const loadUserData = () => async (dispatch) => {
    const userData = await getUserDataFromSecureStore();  // Get the token from SecureStore
    dispatch({
        type: actions.LOAD_USER_DATA,
        payload: userData,  // Use the retrieved token
    });
};
