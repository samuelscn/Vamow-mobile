import React, { useContext } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../contexts/auth';

import landingImg from '../../assets/images/teste.png';
import Show from '../../assets/images/show.jpg';
import Bar from '../../assets/images/bar.jpg';
import Search from '../../assets/icons/lupa.png'
import Pen from '../../assets/icons/caneta.png'

import styles from './styles';

function Menu() {
    const { navigate } = useNavigation();
    const { signOut } = useContext(AuthContext);

    function handleNavigateToBuscarEvento() {
        navigate('Study');
    }

    function handleNavigateToNewEvento() {
        navigate('NewEvent');
    }

    function handleLogout() {
        signOut();
    }

    return (
        <View style={styles.menuComponent} >
            <ImageBackground source={landingImg} style={styles.backImage}>
                <Text style={styles.logo}> VAMOW </Text>
                <Text style={styles.title}>MENU</Text>
                <View style={styles.navMenuContainer}>
                    <View style={styles.outerFrame}>
                        <View style={styles.browseButtons}>
                            <Image style={styles.imageButton} source={Show} alt="show" />
                            <TouchableOpacity style={styles.textButton}>
                                <Text >SHOWS</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.browseButtons}>
                            <Image style={styles.imageButton} source={Bar} alt="bar" />
                            <TouchableOpacity style={styles.textButton}>
                                <Text >BARES</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={handleNavigateToBuscarEvento} style={[styles.button, styles.buscar]}>
                        <Image style={styles.iconButton} source={Search} alt="Lupa" />
                        <Text style={styles.textButtonContainer}>Buscar evento</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNavigateToNewEvento} style={[styles.button, styles.criar]}>
                        <Image style={styles.iconButton} source={Pen} alt="Caneta" />
                        <Text style={styles.textButtonContainer}>Criar evento</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleLogout} style={styles.buttonFooter}>
                    <Text style={styles.textButtonContainer}>Logout</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

export default Menu;