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

export const SignedOut = async () => {
    return await AsyncStorage.multiRemove([
        'userToken',
        'userName',
        'userId'
    ])
}

