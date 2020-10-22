import React from 'react';
import { View, Image, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import styles from './styles';
import logoImg from '../../assets/logo.png';
import heroesImg from  '../../assets/heroes.png';
import { LoginForm } from '../../components/LoginForm';

export default function Login(){

    const navigation = useNavigation();

    function navigateToRegister(){
        navigation.navigate('Register');
    }

    async function handleLogin(values){
        const { email, password } = values;
        try {
            const response = await api.post('sessions', { email, password });
            const {ong, token} = response.data;

            await AsyncStorage.multiSet([
                ['userToken', token],
                ['userName', ong.name],
                ['userId', ong.id]
            ])

            navigation.navigate('Profile')
        } catch(err){
            alert(`Falha no Login ${err.response.data.error}`)
        }
        


    }


    return(
        <View style={styles.container}>
            <View style={styles.header}> 
                <Image source={logoImg} />
            </View>

            <LoginForm onSubmit={handleLogin} />


            <Image
                source={heroesImg}
                style={styles.imageBackground} />

            <TouchableOpacity
                style={styles.button}
                onPress={navigateToRegister}>

                <Text style={styles.buttonText}> Crie sua Conta</Text>
            </TouchableOpacity>

        </View>
    );
}