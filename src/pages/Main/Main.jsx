import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ServicesScreen from './Services/Services';
import ProfileScreen from './Profile/Profile';
import WalletScreen from './Wallet/Wallet';
import InboxScreen from './Inbox/Inbox';
import { bindActionCreators } from 'redux';

import {loadUserData } from '../../../redux/actions/index';

const Tab = createBottomTabNavigator();

function Main(props) {

    useEffect(() => {
        loadUserData(); // Call loadUserData within useEffect
    }, [loadUserData]);

    return (
        <Tab.Navigator initialRouteName='Services' screenOptions={{tabBarStyle: {backgroundColor: '#0B0B0B', borderTopWidth: 0},tabBarActiveTintColor: '#fff'}}>
            <Tab.Screen
                name='Services'
                component={ServicesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='blur' color={color} size={26} />
                    ),
                    tabBarShowLabel: false,
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name='Wallet'
                component={WalletScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='wallet' color={color} size={26} />
                    ),
                    tabBarShowLabel: false,
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name='Inbox'
                component={InboxScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='inbox' color={color} size={26} />
                    ),
                    tabBarShowLabel: false,
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='account' color={color} size={26} />
                    ),
                    tabBarShowLabel: false,
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

const mapStateToProps = (store) => ({
    currentuserData: store.userDataState.currentuserData,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ loadUserData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
