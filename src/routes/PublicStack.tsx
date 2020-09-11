import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Landing from '../pages/Landing';
import Menu from '../pages/Menu';
import Login from '../pages/Login';
import SearchEvent from '../pages/SearchEvent';
import StudyTabs from './StudyTabs';
import Register from '../pages/Register';

const AuthStack = createStackNavigator();

const PublicRoutes: React.FC = () => (
    <NavigationContainer>
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Landing" component={Landing} />
            <AuthStack.Screen name="Menu" component={Menu} />
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="SearchEvent" component={SearchEvent} />
            <AuthStack.Screen name="Study" component={StudyTabs} />
            <AuthStack.Screen name="Register" component={Register} />
        </AuthStack.Navigator>
    </NavigationContainer>
);

export default PublicRoutes;