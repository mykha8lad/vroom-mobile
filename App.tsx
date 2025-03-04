import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from '@/app/index';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './shared/auth.context';

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </AuthProvider>
    );
}