import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backImage: {
        padding: 40,
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    iconArrow: {
        width: 30,
        height: 30
    },
    
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    iconFavicon: {
        width: 30,
        height: 30,
        marginRight: 5
    },

    logo: {
        color: '#FFF',
        fontFamily: 'JosefinSans_500Medium',
    },

    title: {
        color: '#FFF',
        fontFamily: 'Archivo_400Regular',
        maxWidth: 160,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    },

    description: {
        color: '#FFF',
        fontFamily: 'Poppins_400Regular',
        fontSize: 10,
        maxWidth: 180,
    },

});

export default styles;