import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PageHeader from '../../components/PageHeader';

import styles from './styles';

function NewEvent() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <PageHeader
                    title="Que incrível o interesse em cadastrar o seu evento em nossa plataforma."
                    description="O primeiro passo, é preencher esse formulário de inscrição."
                />
                <View style={styles.userContainer}>
                    <View style={styles.userData}>
                        <Text style={styles.titleUser}>Dados do Evento</Text>

                        <Text style={styles.label}>Nome do Evento</Text>
                        <TextInput style={styles.input} />

                        <Text style={styles.label}>Descrição</Text>
                        <TextInput style={styles.input} />

                        <Text style={styles.label}>Avatar</Text>
                        <TextInput type="email" style={styles.input} />

                        <Text style={styles.label}>Categoria</Text>
                        <TextInput type="password" style={styles.input} />

                        <Text style={styles.label}>Estilo</Text>
                        <TextInput style={styles.input} />

                        <View style={styles.schedule}>
                            <Text style={styles.titleCategory}>Categoria</Text>
                            <TouchableOpacity style={styles.buttonNewSchedule}>
                                <Text style={styles.textNewSchedule}>+ Novo Horário</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputSchedule}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Mês</Text>
                                <TextInput style={styles.input} />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia</Text>
                                <TextInput style={styles.input} />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Ano</Text>
                                <TextInput style={styles.input} />
                            </View>
                        </View>

                        <Text style={styles.label}>Estado</Text>
                        <TextInput style={styles.input} />

                        <Text style={styles.label}>Cidade</Text>
                        <TextInput style={styles.input} />

                        <Text style={styles.label}>Local</Text>
                        <TextInput style={styles.input} />

                        <Text style={styles.label}>Valor</Text>
                        <TextInput style={styles.input} />

                        <View style={styles.footerContainer}>
                            <View style={styles.alertContainer}>
                                <Feather name="alert-octagon" size={24} color="#FFCB74" />
                                <Text style={styles.textAlert}>Importante!{'\n'}Preencha todos {'\n'}os dados</Text>
                            </View>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.textButton}>Salvar Cadastro</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default NewEvent;