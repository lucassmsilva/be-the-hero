import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import styled from 'styled-components/native'
import * as Yup from 'yup';

const View = styled.View`
    margin-top: 20px;
    justify-content: center;
`;

const Input = styled.TextInput`
    background-color: #FFF;
    border-radius: 8px;
    text-align: center;
    font-size: 15px;
    margin-top: 10px;
    height: 40px;

`;

const Title = styled.Text`
    text-align: center;
    font-size: 25px;
    margin-bottom: 20px;
`;

const Button = styled.TouchableOpacity`
    margin-top: 20px;
    background-color: #E02041;
    border-radius: 8px;
    width: 100%;
    height: 50px;
    align-self: center;
    justify-content: center;
`;

const ButtonText = styled.Text`
    color: #FFF;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
`
const ErrMessage = styled.Text`
    color: red;
`;

export const RegisterOngForm = props => (
    <Formik
    initialValues={{
        name: '',
        email: '',
        password: '',
        whatsapp: '',
        city: '',
        uf: ''
     }}
    onSubmit={(values) => props.onSubmit(values)}
    validationSchema ={
        Yup.object().shape({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Email inválido').required('Email is required!'),
            password: Yup.string().required('Password is required!'),
            whatsapp: Yup.number().required('Whatsapp is required!')
                .min(1000000000, 'must have 11 digits').max(99999999999, 'must have 11 digits'),
            city: Yup.string().required('City is required'),
            uf: Yup.string().required('UF is required.').length(2, 'Must be two characters')

    })}

    >
    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
    <View> 
        <Title>Cadastro</Title>
        <Input
        placeholder= 'Nome da ONG'
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
        value={values.name}
        />
         <ErrorMessage component={ErrMessage} name='name' />

        <Input
        textContentType= 'emailAddress'
        placeholder= 'Email'
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        />
        <ErrorMessage component={ErrMessage} name='email' />

        <Input
        placeholder = 'Password'
        secureTextEntry= {true}
        textContentType = 'password'
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        />
        <ErrorMessage component={ErrMessage} name='password' />

        <Input
        placeholder = 'Whatsapp'
        onChangeText={handleChange('whatsapp')}
        onBlur={handleBlur('whatsapp')}
        value={values.whatsapp}
        />
        <ErrorMessage component={ErrMessage} name='whatsapp' />

        <Input
        placeholder= 'City'
        onChangeText={handleChange('city')}
        onBlur={handleBlur('city')}
        value={values.city}
        />
        <ErrorMessage component={ErrMessage} name='city' />

        <Input
        placeholder= 'UF'
        onChangeText={handleChange('uf')}
        onBlur={handleBlur('uf')}
        value={values.uf}
        />
         <ErrorMessage component={ErrMessage} name='uf' />

        <Button onPress={handleSubmit}>
            <ButtonText>Enviar</ButtonText>
        </Button>

    </View>

    )}
    </Formik>
);


