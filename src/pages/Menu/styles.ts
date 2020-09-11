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

    title: {
        color: '#FFF',
        fontSize: 13,
        fontFamily: 'JosefinSans_500Medium',
        letterSpacing: 1,
        textAlign: 'center',
    },

    navMenuContainer: {
        marginTop: 20,
        marginLeft: 35,
        width: '80%',
        padding: 25,
        backgroundColor: 'rgba(255, 255, 255, 0.42)',
        borderRadius: 8,
    },

    outerFrame: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    browseButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4
    },

    imageButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        marginRight: 20,
        backgroundColor: '#eee'
    },

    textButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
        width: '60%',
        height: 36,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Archivo_400Regular',
        borderColor: '#E6E6F0',
        borderWidth: 1,
        borderStyle: 'solid'
    },

    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 21,
        marginTop: 20
    },

    button: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        width: '45%',
        height: 55,
        borderRadius: 8,
    },

    buttonFooter: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 55,
    },

    buscar: {
        backgroundColor: 'rgba(255, 203, 116, 0.7)',
    },

    criar: {
        backgroundColor: 'rgba(199, 0, 57, 0.7)',        
    },

    iconButton: {
        width: '30%',
        height: '30%',
        resizeMode: 'contain',
    },

    textButtonContainer: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 15,
        marginRight: 10
    },
});

export default styles;