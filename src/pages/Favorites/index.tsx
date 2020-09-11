import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import PageHeader from '../../components/PageHeader';
import EventList from '../../components/EventList';

import styles from './styles';

function Favorites() {
    return (
        <View style={styles.container}>
            <PageHeader title="Meus Eventos    Favoritos" />
            <ScrollView 
                style={styles.eventList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <EventList/>
                <EventList/>
                <EventList/>
                <EventList/>
            </ScrollView>
        </View>
    )
}

export default Favorites;