import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import { isSignedIn, getUserType } from '../../services/auth';

export default function(){

    const navigation = useNavigation()

    async function goToLoginOng(){
        navigation.navigate('Login', {
            userType: 'ong',
            route: 'sessions'
        })
    }
    async function goToLoginUser(){
        navigation.navigate('Login', {
            userType: 'user',
            route: 'userlogin'
        })
    }

    async function userisLogged() {
        if (isSignedIn){
            const userType = getUserType();
            if (userType === 'user'){
                navigation.navigate('Incidents')
            }
            else {
                navigation.navigate('Profile')
            }
        }
    }

    userisLogged();

    return(
        <View style={styles.container}>
            <Text style={styles.bigQuestion} >Quem é você?</Text>
            <TouchableOpacity style={styles.box} onPress={goToLoginUser}>
                <FontAwesome5 name='user' size={60} color='#FFF' style={styles.iconStyle} />
                <Text style={styles.title}>Pessoa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={goToLoginOng}>
                <FontAwesome5 name='users' size={60} color='#FFF' style={styles.iconStyle} />
                <Text style={styles.title}>ONG</Text>
            </TouchableOpacity>
        </View>
    )
}