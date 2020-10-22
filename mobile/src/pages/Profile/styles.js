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

    title:{
        marginTop: 10,
        marginBottom: 10, 
        fontWeight: 'bold',
        fontSize: 24,
    },

    deleteButton: {
        alignSelf: 'flex-end'
    },

    newCaseButton: {
        marginLeft: 40,
        flexDirection: 'row',
        backgroundColor: '#e02041',
        width: '30%',
        alignItems: 'center',
        borderRadius: 8,     
    },

    options: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 16
    },

    incidentList: {
        marginTop: 16,

    },

    incident: {
        padding:24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,

    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: "#737380"
    }


});