import React from 'react';
import { AsyncStorage } from 'react-native';

export const isSignedIn = async() => {
    const response =  await AsyncStorage.getItem('userToken')
    if (response !== null){
        return true
    }
    else {
        return false
    }
}

export const getUserType = async () => {
    const response =  await AsyncStorage.getItem('userType')
    return response;
}
