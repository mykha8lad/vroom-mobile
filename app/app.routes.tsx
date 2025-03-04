import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from '@/pages/main/MainPage';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (        
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Main" component={MainPage} />
        </Stack.Navigator>        
    );
}