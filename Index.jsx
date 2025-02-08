import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Icon, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState, useEffect } from 'react';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import { Provider, useDispatch } from 'react-redux';  // Import Provider here
import {thunk} from 'redux-thunk';
import { getUserDataFromSecureStore } from './redux/secureStore';
import { setUserData } from './redux/actions';

import MainScreen from './src/pages/Main/Main';

import LoginScreen from './src/pages/Login/Login';
import RegisterScreen from './src/pages/Register/Register_1';

import ServicesScreen from './src/pages/Main/Services/Services';

import WalletScreen from './src/pages/Main/Wallet/Wallet';
import TransferScreen from './src/pages/Main/Wallet/Transfer';
import RequestScreen from './src/pages/Main/Wallet/Request';
import CashInScreen from './src/pages/Main/Wallet/CashIn'
import CashOutScreen from './src/pages/Main/Wallet/CashOut';
import ServiceCenterScreen from './src/pages/Main/Wallet/ServiceCenter';

import InboxScreen from './src/pages/Main/Inbox/Inbox';
import ChatScreen from './src/pages/Main/Inbox/Chat';

import ProfileScreen from './src/pages/Main/Profile/Profile';
import EditPfScreen from './src/pages/Main/Profile/EditPf'



const Stack = createStackNavigator();
const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const loadUserData = async () => {
    const userData = await getUserDataFromSecureStore();
    if (userData) {
      dispatch(setUserData(userData));
      setLoggedIn(true);
      setLoaded(true);
    } else {
      setLoggedIn(false);
      setLoaded(true);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  if (!loaded) {
    return (
      <Provider store={store}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
          <Image source={require('./assets/img/icon.png')} style={{width: 200, height: 200}}/>
        </View>
      </Provider>
    );
  }

  return ( 
      <NavigationContainer>
        <Stack.Navigator initialRouteName={loggedIn ? "Main" : "Login"}>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}} />
          <Stack.Screen name="Services" component={ServicesScreen} />
          <Stack.Screen name="Wallet" component={WalletScreen} />
          <Stack.Screen name="Inbox" component={InboxScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="EditPf" component={EditPfScreen} options={{ title: 'Edit Profile', headerStyle: {backgroundColor: '#000'}, headerTintColor: '#fff', headerBackTitle: 'Back' }}/>
          <Stack.Screen name="Transfer" component={TransferScreen} options={{ title: 'Transfer', headerStyle: {backgroundColor: '#000'}, headerTintColor: '#fff', headerBackTitle: 'Back' }}/>
          <Stack.Screen name="Request" component={RequestScreen} options={{ title: 'Request', headerStyle: {backgroundColor: '#000'}, headerTintColor: '#fff', headerBackTitle: 'Back' }}/>
          <Stack.Screen name="CashIn" component={CashInScreen} options={{ title: 'Cash In', headerStyle: {backgroundColor: '#000'}, headerTintColor: '#fff', headerBackTitle: 'Back' }}/>
          <Stack.Screen name="CashOut" component={CashOutScreen} options={{ title: 'Cash Out', headerStyle: {backgroundColor: '#000'}, headerTintColor: '#fff', headerBackTitle: 'Back' }}/>
          <Stack.Screen name="ServiceCenter" component={ServiceCenterScreen} options={{ title: 'Service Center', headerStyle: {backgroundColor: '#000'}, headerTintColor: '#fff', headerBackTitle: 'Back' }}/>
          <Stack.Screen name="Chat" component={ChatScreen} options={{ title: 'Chat', headerStyle: {backgroundColor: '#000'}, headerTintColor: '#fff', headerBackTitle: 'Back' }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
