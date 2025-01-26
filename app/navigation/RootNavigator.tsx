import React from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const isAuthenticated = false;// В дальнейшем заменим на логику авторизации, например проверку токена

export default function RootNavigator() {    

  return (
      isAuthenticated ? <MainStack /> : <AuthStack />   
  );
}