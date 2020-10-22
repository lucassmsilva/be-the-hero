import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import styles from './styles';
import logoImg from '../../assets/logo.png';
import { RegisterOngForm } from '../../components/RegisterOngForm';

export default function Register(){
    const navigation = useNavigation();

    function navigateBack(){
        navigation.goBack();
    }

    async function handleRegister(values){
        const { name, email, password, whatsapp, city, uf } = values;
        try{
            const response = await api.post('ongs', { name, email, password, whatsapp, city, uf })
            alert('Cadastrado com Sucesso')
            navigateBack()

        }catch(err){
            alert(`Erro no Cadastro ${err.response.data.err}`)
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}> 
                <Image source={logoImg} />
                <TouchableOpacity 
                    style={styles.goBack}
                    onPress={navigateBack}>
                <Feather name='arrow-left' size={16} color='#e02041' />
                </TouchableOpacity>
                
            </View>

            <RegisterOngForm onSubmit={handleRegister}/>

        </View>
    );
}