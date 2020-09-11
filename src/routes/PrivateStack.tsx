import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import NewEvent from '../pages/NewEvent';
import Menu from '../pages/Menu';
import SearchEvent from '../pages/SearchEvent';
import StudyTabs from './StudyTabs';

const AppStack = createStackNavigator();

const PrivateRoutes: React.FC = () => (
    <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Menu" component={Menu} />
            <AppStack.Screen name="SearchEvent" component={SearchEvent} />
            <AppStack.Screen name="Study" component={StudyTabs} />
            <AppStack.Screen name="NewEvent" component={NewEvent} />
        </AppStack.Navigator>
    </NavigationContainer>
);

export default PrivateRoutes;