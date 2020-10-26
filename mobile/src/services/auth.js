import React from 'react';
import { AsyncStorage } from 'react-native';

export const isSignedIn = async() => {
    const response =  await AsyncStorage.getItem('userToken')
    return response;
}

export const getUserType = async () => {
    const response =  await AsyncStorage.getItem('userType')
    return response;
}
