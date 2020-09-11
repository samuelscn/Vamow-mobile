import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import api from '../../services/api';

import styles from './styles';

import hej from '../../assets/images/henejul.jpg';
import Favicon from '../../assets/icons/favicon.png';

export interface EventListProps {
    event: {
        avatarEvento: string
        day: number
        descricao: string
        local_id: number
        month: string
        nome_evento: string
        style_id: number
        valor: number
        year: number
    }
}

const EventList: React.FC<EventListProps> = ({event}) => {
    const [ style, setStyle ] = useState([]);
    const [ local, setLocal ] = useState([]);

    useEffect(() => {
        const styleId = event.style_id;
        const id = event.local_id;
        async function getStyleData() {
            const response = await api.get(`style/${styleId}`);
            const response2 = await api.post('local/data', { id });
            setLocal(response2.data);
            setStyle(response.data);
        }  
        getStyleData();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <View style={styles.profileBox}>
                    <Image style={styles.avatar} source={{uri: `${event.avatarEvento}`}} />
                    <View style={styles.boxTitle}>
                        <Text style={styles.eventName}>{event.nome_evento}</Text>
                        <Text style={styles.styleName}>{style.map((styleName:any)=> { return  styleName.nome})}</Text>
                    </View>
                </View>
                <Text style={styles.description}>{event.descricao}</Text>
                    <Text style={styles.data}>{`Data: ${event.day}/${event.month}/${event.year}`}</Text>
                    <Text style={styles.local}>{`Local: ${local.map((localName:any) => { return localName.nome })}`}</Text>
                    
                <Text style={styles.value}>{`Valor: R$ ${event.valor}`}</Text>
                <View style={styles.favbutton}>
                    <TouchableOpacity style={styles.favoriteButton}>
                        <Ionicons name="ios-heart" size={44} color='#c1bccc'/>    
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.vamowButton}>
                        <Image style={styles.icon} source={Favicon} />
                        <Text style={styles.vamowText}>VAMOW</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default EventList;