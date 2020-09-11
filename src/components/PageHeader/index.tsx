import React, { ReactNode } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';

import Arrow from '../../assets/icons/seta-esquerda.png';
import Favicon from '../../assets/icons/favicon.png';
import landingImg from '../../assets/images/teste.png';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Filter from '../Filter';

interface PageHeaderProps {
    title: string;
    headerRight?: ReactNode;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, description, children }) => {
    const { navigate } = useNavigation();

    function handleGoBack() {
        navigate('Menu');
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={landingImg} style={styles.backImage}>
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={handleGoBack} style={styles.buttonArrow}>
                        <Image style={styles.iconArrow} source={Arrow} resizeMode="contain"/>
                    </TouchableOpacity>
                    <View style={styles.logoContainer}>
                        <Image style={styles.iconFavicon} source={Favicon} resizeMode="contain"/>
                        <Text style={styles.logo}>VAMOW</Text>
                    </View>
                </View>
                <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>
                    {headerRight}
                </View>
                { description && <Text style={styles.description}> { description } </Text> }
                {children}
            </ImageBackground>
        </View>
    )
}

export default PageHeader;