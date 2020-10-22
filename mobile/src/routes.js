import React, {useState} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

export default function Routes(){

    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }} >
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
                <AppStack.Screen name="Register" component={Register} />
                <AppStack.Screen name="Profile" component={Profile} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}