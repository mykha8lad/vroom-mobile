// import React, { useState, useEffect } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';

// import WelcomePage from '@/pages/welcome/WelcomePage';
// import SignInPage from '@/pages/sign-in/SignInPage';
// import SignUpPage from '@/pages/sign-up/SignUpPage';
// import EmailConfirmationPage from '@/pages/email-confirmation/EmailConfirmationPage';

// import MainPage from '@/pages/main/MainPage';
// import PlaylistVideosColumn from '@/widgets/Playlists/PlaylistVideosColumn/PlaylistVideosColumn';
// import ChannelPage from '@/pages/channel/ChannelPage';

// // Для простоты и наглядности использования, логика навигации организована в одном файле

// const Stack = createStackNavigator();

// export default function Index() {    
//     return (            
//     //     <Stack.Navigator
//     //     initialRouteName="Welcome"
//     //     screenOptions={{
//     //       headerShown: false,
//     //     }}
//     //   >
//     //         {/* Auth */}
//     //         {/* <Stack.Screen name="WelcomePage" component={WelcomePage} />
//     //         <Stack.Screen name="SignUpPage" component={SignUpPage} />
//     //         <Stack.Screen name="LogInPage" component={SignInPage} />
//     //         <Stack.Screen name="EmailConfirmationPage" component={EmailConfirmationPage} /> */}

//     //         {/* General page */}
//     //         <Stack.Screen name="Main" component={MainScreen} />    
//     //         <Stack.Screen name="PlaylistPreview" component={PlaylistPreview} />
            
//     //     </Stack.Navigator>  
    
            
//             <Stack.Navigator screenOptions={{
//                       headerShown: false,
//                     }}>                                                
//                 <Stack.Screen name="Main" component={MainPage} />    
//                 <Stack.Screen name="PlaylistPreview" component={PlaylistVideosColumn} />
//             </Stack.Navigator>
        
//     );
// }

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './auth.routes';
import AppNavigator from './app.routes';
import { useAuth } from '@/shared/auth.context';
import { AuthProvider } from '@/shared/auth.context';

const Stack = createStackNavigator();

const RootNavigator = () => {
    const { isAuthenticated } = useAuth(); // Получаем информацию о статусе аутентификации

  return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
};

export default RootNavigator;