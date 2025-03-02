import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from "./auth/WelcomeScreen";
import SignUpScreen from "./auth/SignUpScreen";
import EmailConfirmationScreen from "./auth/EmailConfirmationScreen";
import LoginScreen from "./auth/LoginScreen";

import MainScreen from './main/MainScreen';
import PlaylistVideosColumn from '@/widgets/Playlists/PlaylistVideosColumn/PlaylistVideosColumn';
import GeneralChannelScreen from './main/Profile/Channel/GeneralChannelScreen';

// Для простоты и наглядности использования, логика навигации организована в одном файле

const Stack = createStackNavigator();

export default function Index() {    
    return (            
    //     <Stack.Navigator
    //     initialRouteName="Welcome"
    //     screenOptions={{
    //       headerShown: false,
    //     }}
    //   >
    //         {/* Auth */}
    //         {/* <Stack.Screen name="Welcome" component={WelcomeScreen} />
    //         <Stack.Screen name="SignUp" component={SignUpScreen} />
    //         <Stack.Screen name="LogIn" component={LoginScreen} />
    //         <Stack.Screen name="Confirmation" component={EmailConfirmationScreen} /> */}

    //         {/* General page */}
    //         <Stack.Screen name="Main" component={MainScreen} />    
    //         <Stack.Screen name="PlaylistPreview" component={PlaylistPreview} />
            
    //     </Stack.Navigator>  
    
            
            <Stack.Navigator screenOptions={{
                      headerShown: false,
                    }}>                                                
                <Stack.Screen name="Main" component={MainScreen} />    
                <Stack.Screen name="PlaylistPreview" component={PlaylistVideosColumn} />
            </Stack.Navigator>
        
    );
}