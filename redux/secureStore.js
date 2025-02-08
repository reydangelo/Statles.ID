import * as SecureStore from 'expo-secure-store';

export const saveUserDataToSecureStore = async (userData) => {
  try {
    const userDataString = JSON.stringify(userData)
    await SecureStore.setItemAsync('userData', userDataString);
  } catch (error) {
    console.error('Error saving token to SecureStore', error);
  }
};

export const getUserDataFromSecureStore = async () => {
  try {
    const userDataString = await SecureStore.getItemAsync('userData');
    const userData = JSON.parse(userDataString)
    return userData;
  } catch (error) {
    console.error('Error retrieving token from SecureStore', error);
    return null;
  }
};

export const removeUserDataFromSecureStore = async () => {
  try {
    await SecureStore.deleteItemAsync('userData');
  } catch (error) {
    console.error('Error removing token from SecureStore', error);
  }
};


