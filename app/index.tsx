import React, { useState, useEffect, useContext } from 'react';
import AuthNavigator from './auth.routes';
import AppNavigator from './app.routes';
import { AuthContext } from './AuthContext';

const RootNavigator = () => {    
    const authContext = useContext(AuthContext);

    if (!authContext) return null; // Проверяем, что контекст загружен

    const { isAuthenticated } = authContext;

    return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;

    // return <AppNavigator />
};

export default RootNavigator;