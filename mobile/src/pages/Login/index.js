import React from 'react';
import { View, Image, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import styles from './styles';
import logoImg from '../../assets/logo.png';
import heroesImg from  '../../assets/heroes.png';
import { LoginForm } from '../../components/LoginForm';

export default function Login({route, navigat}){

    const navigation = useNavigation();

    function navigateToRegister(){
        navigation.navigate('Register', route.params);
    }

    async function handleLogin(values){
        const { email, password } = values;
        try {
            const rota = route.params.route;
            const response = await api.post(rota, { email, password });

            if (route.params.userType === 'ong'){
                const {ong, token} = response.data;

                await AsyncStorage.multiSet([
                    ['userToken', token],
                    ['userName', ong.name],
                    ['userId', ong.id]
                ])
    
                navigation.navigate('Profile')
            }
            else {
                if (route.params.userType === 'user'){
                    const {user, token} = response.data;

                    await AsyncStorage.multiSet([
                        ['userToken', token],
                        ['userName', user.name],
                        ['userId', user.id]
                    ])
        
                    navigation.navigate('Incidents')
                }
                else {
                    throw new Error ('Falha');
                }
            }

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