import React, { useState } from 'react';
import { View, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import styles from './styles';
import logoImg from '../../assets/logo.png';

import { NewIncidentForm } from '../../components/NewIncidentForm';

export default function NewIncident(props){
    const navigation = useNavigation();
    const [ongId, setOngId] = useState('');

    function navigateBack(){
        navigation.goBack();
    }

    async function getOngData(){
        const userId = await AsyncStorage.getItem('userId')
        setOngId(userId);
    }
    
    async function handleNewIncident(values){
        const { title, description, value } = values;
        try{
            const response = await api.post('incidents', { title, description, value }, {
                headers: {
                    id: ongId
                }
            })
            alert('Cadastrado com Sucesso')
            navigateBack()

        }catch(err){
            alert(`Erro no Cadastro ${err.response.data.err}`)
        }
    }

    getOngData();

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

            <NewIncidentForm onSubmit={handleNewIncident}/>

        </View>
    );
}