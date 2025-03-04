import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './auth.routes';
import AppNavigator from './app.routes';

const Stack = createStackNavigator();

const RootNavigator = () => {    
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
};

export default RootNavigator;