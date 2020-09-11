import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface handleHeaderProps {
    title: string
}

const Header: React.FC<handleHeaderProps> = ({title, children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.teste}>{title}</Text>
            {children}
        </View>
    )
}

export default Header;