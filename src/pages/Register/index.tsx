import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PageHeader from '../../components/PageHeader';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import api from '../../services/api';

function Register() {
    const [ nome, setNome ] = useState('');
    const [ sobrenome, setSobrenome ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ confirmePassword, setConfirmePassword ] = useState('');
    const { navigate } = useNavigation();

    async function handleSubmit() {
        if (senha === confirmePassword) {
            api.post('users', {
                nome,
                sobrenome,
                email,
                senha
            }).then((response) => {
                alert('Cadastro realizado com sucesso!');
                
                navigate('Menu');
                //authRegister(response.data);
            }).catch(() => {
                alert('Erro ao realizar o cadastro!');
            })
        } else {
            alert('Confirmação de senha invalida!');    
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <PageHeader
                    title="Que incrível o interesse em fazer parte da nossa plataforma."
                    description="O primeiro passo, é preencher esse formulário de inscrição."
                />
                <View style={styles.userContainer}>
                    <View style={styles.userData}>
                        <Text style={styles.titleUser}>Dados do Usuário</Text>

                        <Text style={styles.label}>Nome</Text>
                        <TextInput 
                            style={styles.input} 
                            value={nome}
                            onChangeText={text => setNome(text)}
                        />

                        <Text style={styles.label}>Sobrenome</Text>
                        <TextInput 
                            style={styles.input} 
                            value={sobrenome}
                            onChangeText={text => setSobrenome(text)}
                        />

                        <Text style={styles.label}>E-mail</Text>
                        <TextInput 
                            style={styles.input} 
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />

                        <Text style={styles.label}>Senha</Text>
                        <TextInput 
                            style={styles.input} 
                            value={senha}
                            onChangeText={text => setSenha(text)}
                        />

                        <Text style={styles.label}>Confirme a Senha</Text>
                        <TextInput style={styles.input} 
                            value={confirmePassword}
                            onChangeText={text => setConfirmePassword(text)}
                        />

                        <View style={styles.footerContainer}>
                            <View style={styles.alertContainer}>
                                <Feather name="alert-octagon" size={24} color="#FFCB74" />
                                <Text style={styles.textAlert}>Importante!{'\n'}Preencha todos {'\n'}os dados</Text>
                            </View>
                            <TouchableOpacity style={styles.button}>
                                <Text onPress={handleSubmit} style={styles.textButton}>Salvar Cadastro</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Register;