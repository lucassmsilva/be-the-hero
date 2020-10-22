import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import styled from 'styled-components/native'
import * as Yup from 'yup';

export const NewIncidentForm = props => (
    <Formik
    initialValues={{
        title: '',
        description: '',
        value: ''
     }}
    onSubmit={(values) => props.onSubmit(values)}
    validationSchema ={
        Yup.object().shape({
            title: Yup.string().required('Title required'),
            description: Yup.string().required().min(100, 'At least 100 characteres'),
            value: Yup.number().required('Value is required')

    })}

    >
    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
    <View> 
        <Title>Cadastrar Novo Caso</Title>
        <Input
        placeholder= 'Titulo'
        onChangeText={handleChange('title')}
        onBlur={handleBlur('title')}
        value={values.title}
        />
         <ErrorMessage component={ErrMessage} name='title' />

        <InputDescription
        placeholder= 'Descrição'
        multiline = {true}
        onChangeText={handleChange('description')}
        onBlur={handleBlur('description')}
        value={values.description}
        />
        <ErrorMessage component={ErrMessage} name='description' />

        <Input
        placeholder= 'Valor'
        onChangeText={handleChange('value')}
        onBlur={handleBlur('value')}
        value={values.value}
        />
         <ErrorMessage component={ErrMessage} name='value' />

        <Button onPress={handleSubmit}>
            <ButtonText>Enviar</ButtonText>
        </Button>

    </View>

    )}
    </Formik>
);

const View = styled.View`
    margin-top: 20px;
    justify-content: center;
`;

const Input = styled.TextInput`
    background-color: #FFF;
    border-radius: 8px;
    text-align: center;
    font-size: 16px;
    margin-top: 16px;
    height: 60px;

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

const InputDescription = styled(Input)`
    height: 120px;
`;

const ErrMessage = styled.Text`
    color: red;
`;