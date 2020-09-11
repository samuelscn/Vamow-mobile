import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';


interface PageFilterProps {

}

const Filter: React.FC<PageFilterProps> = () => {
    return (
        <View style={styles.filterContainer}>
            <Text style={styles.label}>Mês</Text>
            <TextInput style={styles.input} placeholder="Qual o Mês?" />
            <View style={styles.inputGroup}>
                <View style={styles.inputBlock}>
                    <Text style={styles.label}>Cidade</Text>
                    <TextInput style={styles.input} placeholder="Qual a Cidade?" />
                </View>
                <View style={styles.inputBlock}>
                    <Text style={styles.label}>Estilo</Text>
                    <TextInput style={styles.input} placeholder="Qual o Estilo?" />
                </View>
            </View>
        </View>
    )
}

export default Filter;