import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native';

import landingImg from '../../assets/images/teste.png';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

function Login() {
    const { navigate } = useNavigation();

    function handleNavigateToRegister() {
        navigate('Register');
    }

    return (
        <View style={styles.loginComponent} >
            <ImageBackground source={landingImg} style={styles.backImage}>
                <Text style={styles.logo}> VAMOW </Text>
                <Text style={styles.slogan}>O SEU APLICATIVO DE EVENTO</Text>
                <View style={styles.navLoginContainer}>
                    <View style={styles.outerFrame}>
                        <View style={styles.inputBlock}>
                            <TextInput style={styles.input} type="email" placeholder="E-mail"/>
                        </View>
                        <View style={styles.inputBlock}>
                            <TextInput style={styles.input} type="password" placeholder="Senha"/>
                        </View>
                        <TouchableOpacity style={styles.buttonLostPass}>
                            <Text style={styles.textLostPass}>Esqueci minha senha</Text>
                        </TouchableOpacity> 
                        <TouchableOpacity style={styles.buttonEnter}>
                            <Text style={styles.textEnter}>ENTRAR</Text>
                        </TouchableOpacity> 
                        <View style={styles.buttonRegister}>
                            <Text style={styles.textNoHave}>Não tem uma conta?</Text>
                            <TouchableOpacity onPress={handleNavigateToRegister}>
                                <Text style={styles.textRegister}>Registre-se</Text>
                            </TouchableOpacity> 
                        </View>
                    </View>
                </View>

                <View style={styles.buttonsContainer}>
                    
                </View>

            </ImageBackground>
        </View>
    );
}

export default Login;