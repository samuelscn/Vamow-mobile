import React, { useState } from 'react';
import { View, ImageBackground, TouchableOpacity, Text, Image, ScrollView, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PageHeader from '../../components/PageHeader';
import EventList from '../../components/EventList';
import api from '../../services/api';

import styles from './styles';

function SearchEvent() {
    const [ isFiltersVisible, setIsFiltersVisible ] = useState(false);
    const [ month, setMonth ] = useState('');
    const [ city, setCity ] = useState('');
    const [ style, setStyle ] = useState('');
    const [ events, setEvents ] = useState([]);

    function setVisibleTrue() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    async function handleFiltersSubmit() {
        const response = await api.get('/events', {
            params: {
                month,
                style,
                city
            }
        })

        setEvents(response.data);
        setIsFiltersVisible(false);
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Eventos          Disponíveis" 
                headerRight= {
                    <TouchableOpacity onPress={setVisibleTrue}><Feather name="filter" size={20} color="#FFF"></Feather></TouchableOpacity>
                }
            >
                { isFiltersVisible && ( 
                    <View style={styles.filterContainer}>
                        <Text style={styles.label}>Mês</Text>
                        <TextInput 
                            style={styles.input} 
                            value={month}
                            onChangeText={text => setMonth(text)}
                            placeholder="Qual o Mês?" 
                        />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Estilo</Text>
                                <TextInput 
                                    style={styles.input} 
                                    value={style}
                                    onChangeText={setStyle}
                                    placeholder="Qual o Estilo?" 
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Cidade</Text>
                                <TextInput 
                                    style={styles.input} 
                                    value={city}
                                    onChangeText={setCity}
                                    placeholder="Qual a Cidade?" 
                                />
                            </View>
                        </View>
                        <TouchableOpacity onPress={handleFiltersSubmit} style={styles.buttonSearch}>
                            <Text style={styles.textSearch}>Buscar</Text>
                        </TouchableOpacity>
                    </View> 
                )}
            </PageHeader>
            <ScrollView 
                style={styles.eventList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {events.map((eventsData) => {
                    return <EventList key={eventsData.id} event={eventsData}/>
                })}
            </ScrollView>
        </View>
    )
}

export default SearchEvent;