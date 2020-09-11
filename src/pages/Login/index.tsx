import React, { useState, useContext } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import AuthContext from '../../contexts/auth';

import landingImg from '../../assets/images/teste.png';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

function Login() {
    const { navigate } = useNavigation();
    const { signIn } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleNavigateToRegister() {
        navigate('Register');
    }

    async function handleEnter() {
        if (email === '' || password === '') {
            Alert.alert(
                "Campo Vazio",
                "Preencha todos os campos!",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
            );
        } else {
            await api.get(`users/${email}/${password}`).then((response: any) => {
                if(response.data.getUserData[0].nome != null) {
                    signIn(response.data);
                }                   
            })
        }  
    }

    return (
        <View style={styles.loginComponent} >
            <ImageBackground source={landingImg} style={styles.backImage}>
                <Text style={styles.logo}> VAMOW </Text>
                <Text style={styles.slogan}>O SEU APLICATIVO DE EVENTO</Text>
                <View style={styles.navLoginContainer}>
                    <View style={styles.outerFrame}>
                        <View style={styles.inputBlock}>
                            <TextInput
                                style={styles.input}
                                placeholder="E-mail"
                                keyboardType="email-address"
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>
                        <View style={styles.inputBlock}>
                            <TextInput
                                style={styles.input}
                                type="password"
                                placeholder="Senha"
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>
                        <TouchableOpacity style={styles.buttonLostPass}>
                            <Text style={styles.textLostPass}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleEnter} style={styles.buttonEnter}>
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