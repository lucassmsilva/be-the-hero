import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Image, TouchableOpacity, AsyncStorage, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'
import api from '../../services/api';

import styles from './styles';
import logoImg from '../../assets/logo.png';


export default function Profile(){

    const [ongName, setOngName] = useState('');
    const [ongId, setOngId] = useState('');

    const [incidents, setIncidents] = useState([]);
    
    const navigation = useNavigation();

    async function getOngData(){
        try{

            const ongId = await AsyncStorage.getItem('userId')
            const ongName = await AsyncStorage.getItem('userName')
            setOngId(ongId);
            setOngName(ongName);

        }catch(err){
            alert('Erro ao carregar dados')
        }

    }

    async function SignedOut () {
        try{
            await AsyncStorage.multiRemove([
                'userToken',
                'userName',
                'userId',
                'userType'
            ])

            navigation.navigate('Auth');

        }catch(err){
            alert('Falha no Logout')
        }

    }

    async function loadIncidents() {

        try{
            if (!ongId){
                alert('erro ao carregar')
            }
            else{
                    const response = await api.get('profile', {
                        headers: { id: ongId }
                    })
            
            
                    if(!response){
                        alert('Resposta nula')
                    }
                    else{
                        setIncidents(response.data)
                    }
        
                }
        }catch(err){
            alert('Erro ao carregar incidents')
        }
    }

    async function handleDelete(id){
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    id: ongId
                }
            });


            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (err) {
            alert('Erro ao deleter caso, tente novamente');
        }
    }

    function handleNewIncidents(){
        navigation.navigate('NewIncident', {
            ongId: ongId
        })
    }

    useEffect(() => {
        let monted = true;
        if (monted) {
            getOngData()
            if (ongId){
                loadIncidents()
            }    
        }

        return function cleanup(){
            monted = false;
        }

    }, [ongId])



    return(
        <View style={styles.container}>
            <View style={styles.header}> 
                <Image source={logoImg} />

                <TouchableOpacity style={styles.newCaseButton} onPress={handleNewIncidents}>
                    <Text style={styles.options}>Novo </Text>
                    <Feather name='plus' size={16} color='#fff' />
                </TouchableOpacity>

                <TouchableOpacity onPress={SignedOut}>
                    <Feather name='log-out' size={16} color='#e02041'> </Feather>
                </TouchableOpacity>
            </View>

        <Text style={styles.title}>Bem vindo, {ongName}</Text>

        <FlatList
                style={styles.incidentList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator = {false}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident}>
                        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(incident.id)}>
                            <Feather name='trash' size={16} color='#e02041' />
                        </TouchableOpacity>
                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
                        <Text style={styles.incidentValue}>{incident.description}</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'}).format(incident.value)}</Text>

                    </View>
                )}
                
            />

        </View>
    );
}