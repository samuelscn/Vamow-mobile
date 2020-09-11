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

    navLoginContainer: {
        marginTop: 20,
        marginLeft: 35,
        width: '80%',
        padding: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.42)',
        borderRadius: 8,
    },

    outerFrame: {
        alignItems: 'center',
    },

    inputBlock: {
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
        width: '100%',
        height: 36,
        borderRadius: 8,
        fontFamily: 'Archivo_400Regular',
        borderColor: '#E6E6F0',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 10,
        marginTop: 10
    },

    textLostPass: {
        marginRight: 23,
        color:'#FFCB74',
        fontFamily: 'Archivo_400Regular',
    },

    buttonEnter: {
        backgroundColor: 'rgba(199, 0, 57, 0.7)',
        width: '100%',
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    textEnter: {
        color:'#FFF',
        fontFamily: 'Archivo_700Bold',
    },

    buttonRegister: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        fontFamily: 'Archivo_400Regular',
        marginTop: 5
    },

    textNoHave: {
        color: '#FFF'
    },

    textRegister: {
        color:'#FFCB74',
        marginLeft: 5
    },

});

export default styles;