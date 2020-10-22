import React, { useEffect } from 'react';
import { Picker} from '@react-native-community/picker';
import { View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5, Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import styles from './styles';
import logoImg from '../../assets/logo.png';

import { RegisterOngForm } from '../../components/RegisterOngForm';
import { RegisterUserForm } from '../../components/RegisterUserForm';



export default function Register({route, navigat}){
    const navigation = useNavigation();

    function navigateBack(){
        navigation.goBack();
    }

    async function handleRegisterOng(values){
        const { name, email, password, whatsapp, city, uf } = values;
        try{
            const response = await api.post('ongs', { name, email, password, whatsapp, city, uf })
            alert('Cadastrado com Sucesso')
            navigateBack()

        }catch(err){
            alert(`Erro no Cadastro ${err.response.data.err}`)
        }
    }

    async function handleRegisterUser(values){
        const { name, email, password, cpf, city, uf } = values;
        try{
            const response = await api.post('users', { name, email, password, cpf, city, uf })
            alert('Cadastrado com Sucesso')
            navigateBack()

        }catch(err){
            alert(`Erro no Cadastro ${err.response.data.err}`)
        }
    }


    function selectForm() {
        if (route.params.userType === 'ong'){
            return ( <RegisterOngForm onSubmit={handleRegisterOng} /> );
        }
        else {
            if(route.params.userType === 'user'){
                return ( <RegisterUserForm onSubmit={handleRegisterUser} />)
            }
            else {
                alert("ERRO!")
            }
        }
    }

    useEffect(() => {
        selectForm();
    },)

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

            <FontAwesome5 name='users' size={30} color='#000' />
        

        {selectForm()}
            

        </View>
    );
}