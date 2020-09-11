import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

import SearchEvent from '../pages/SearchEvent';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#322b4d'
            }}
        >
            <Screen 
                name="SearchEvent" 
                component={SearchEvent} 
                options={{
                    tabBarLabel: 'Eventos',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <SimpleLineIcons name="event" size={size} color={focused ? '#FFBD69' : color}/>
                        )
                    }
                }}
            />
            <Screen 
                name="Favorites" 
                component={Favorites} 
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="ios-heart" size={size} color={focused ? '#C70039' : color}/>
                        )
                    }
                }}    
            />
        </Navigator>
    )
}

export default StudyTabs;