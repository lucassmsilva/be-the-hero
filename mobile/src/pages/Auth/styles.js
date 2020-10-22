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

    bigQuestion: {
        marginTop: 10,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center'
    },

    box: {
        marginTop: 48,
        width: '60%',
        height: '30%',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#e02041',
        borderRadius: 16
    },

    iconStyle: {
        marginTop: 40,
        alignSelf:'center',
        alignContent: 'center'
    },

    title: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF'
    }
});