import React from "react";
import AuthProvider from "@/app/AuthContext"; // ✅ Работает, потому что теперь это default export
import RootNavigator from '@/app/index';
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
    return (
        <AuthProvider> {/* Оборачиваем приложение */}
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </AuthProvider>
    );
};

export default App;
