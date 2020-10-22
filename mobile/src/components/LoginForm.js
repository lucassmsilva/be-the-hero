import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import styled from 'styled-components/native';
import * as Yup from 'yup';

const View = styled.View`
    margin-top: 40px;
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
    align-content: center;
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

export const LoginForm = props => (
    <Formik
    initialValues={{
        email: '',
        password: '' }}
    onSubmit={(values) => props.onSubmit(values)}
    validationSchema ={ 
        Yup.object().shape({
            email: Yup.string().email('Email invalido').required('Email is required!'),
            password: Yup.string().required('Password is required!')
    })}

    >
    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
    <View> 
        <Title>Login</Title>
        
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
        <Button onPress={handleSubmit}>
            <ButtonText>Entrar</ButtonText>
        </Button>

    </View>

    )}
    </Formik>
);


