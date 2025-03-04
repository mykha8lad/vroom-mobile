import React from 'react';
import RootNavigator from '@/app/index';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (        
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>        
    );
}