import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    userContainer: {
        padding: 20,
        marginTop: -40,
        overflow: 'hidden',  
    },
    
    userData: {
        paddingHorizontal: 16,
        paddingBottom: 16,
        backgroundColor: 'white',
        borderRadius: 8
    },

    titleUser: {
        color: '#32264D',
        fontFamily: 'Archivo_700Bold',
        borderColor: '#E6E6F0',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10
    },

    label: {
        color: '#9C98A6',
        fontFamily: 'Poppins_400Regular',
    },

    input: {
        height: 44,
        backgroundColor: '#E6E6F0',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 5
    },

    footerContainer: {
        borderColor: '#E6E6F0',
        borderTopWidth: 1,
        borderStyle: 'solid',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },

    alertContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textAlert: {
        marginTop: 2,
        fontFamily: 'Poppins_400Regular',
        color: '#A0A0B2',
        fontSize: 10,
        marginLeft: 10
    },

    button: {
        marginTop: 10,
        backgroundColor: '#C70039',
        width: '50%',
        height: 40,
        borderRadius: 8, 
    },

    textButton: {
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'Archivo_700Bold',
        color: '#FFF'
    },
});

export default styles;