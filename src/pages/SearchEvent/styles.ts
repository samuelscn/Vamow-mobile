import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#f0f0f7',
        height: '100%'
    },

    eventList: {
        marginTop: -20,
    },

    label: {
        color: '#fff',
        fontFamily: 'Poppins_400Regular',
    },

    input: {
        height: 44,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 5
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputBlock: {
        width: '48%'
    },

    buttonSearch: {
        backgroundColor: '#C70039',
        height: 44,
        borderRadius: 8, 
        marginTop: 7,
        justifyContent: 'center'
    },

    textSearch: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        textAlign: 'center',
        fontSize: 16
    },

});

export default styles;