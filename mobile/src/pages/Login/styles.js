import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    imageBackground: {
        marginTop: 16,
        width: '100%',
        height: 240,
        opacity: 0.5
    },

    button: {
        alignContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 8,
        width: '100%'

    },

    buttonText: {
        color: '#e02041',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    }


});