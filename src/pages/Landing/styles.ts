import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    backImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    logo: {
        color: 'white',
        fontSize: 70,
        marginTop: 120,
        fontFamily: 'JosefinSans_500Medium',
        letterSpacing: 2,
        textAlign: 'center'
    },

    slogan: {
        color: '#FFF',
        fontSize: 13,
        fontFamily: 'JosefinSans_500Medium',
        letterSpacing: 1,
        textAlign: 'center'
    },

    title: {
        padding: 50,
        marginTop: 30,
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
    },

    titleBold: {
        fontWeight: 'bold'
    },

    buttonsContainer: {
        padding: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -50 
    },

    button: {
        height: 156,
        width: '48%',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
    },

    buttonPrimary: {
        backgroundColor: 'rgba(255, 203, 116, 0.7)',
    },

    buttonSecondary: {
        backgroundColor: 'rgba(199, 0, 57, 0.7)',
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 16,
    },

    loginIcon: {
        width: '40%',
        height: '40%',
        resizeMode: 'contain'
    },

    signinIcon: {
        width: '40%',
        height: '40%',
        resizeMode: 'contain'
    }
});

export default styles;