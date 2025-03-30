import { styles } from "./SignInPageStyles";
import React, { useState, useEffect, useContext } from 'react';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import { StackActions } from "@react-navigation/native";
import axios from 'axios';

import { useAuthStore } from "@/shared/store/authStore";

import { validateEmail } from "@/shared/validateTools/validateEmail";
import { validatePassword } from "@/shared/validateTools/validatePasswors";

import { EmailForm } from "@/shared/ui/SignUpSignInForms/EmailForm/EmailForm";
import { PasswordForm } from "@/shared/ui/SignUpSignInForms/PasswordForm/PasswordForm";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  TextInput,
  Platform,
  Alert,
} from 'react-native';

// Функция для генерации фейкового JWT
const generateMockJWT = (user: any) => {
    const payload = {
        id: user.id,
        email: user.email,
        userName: user.userName,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // Токен истекает через 24 часа
    };

    return `mock.${btoa(JSON.stringify(payload))}.token`; // Простая эмуляция JWT
};

export default function SignInPage({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [isFormValid, setIsFormValid] = useState(false);

    const login = useAuthStore((state) => state.login);

    useEffect(() => {
            if (!emailError && !passwordError && email && password) {
                setIsFormValid(true);
            } else {
                setIsFormValid(false);
            }
    }, [emailError, passwordError, email, password]);

    const handleLogin = async (email: string, password: string) => {
        try {
            // Делаем запрос к MockAPI (тут должен быть `GET /users`, но MockAPI не поддерживает `login`)
            const response = await axios.get(`https://67d5744ad2c7857431f0730c.mockapi.io/api/v1/register`);
            
            // Ищем пользователя по email
            const user = response.data.find((user: any) => user.email === email);
            
            if (!user) {
                throw new Error('Пользователь не найден');
            }
            
            // Проверяем пароль (только в мок-сервере, в реальном API хешируется)
            if (user.password !== password) {
                throw new Error('Неверный пароль');
            }
            
            // Генерируем моковый JWT
            const mockToken = `mock.${btoa(JSON.stringify({ id: user.id, email: user.email }))}.token`;

            // Сохраняем токен и данные пользователя в AsyncStorage
            await AsyncStorage.setItem("token", mockToken);
            await AsyncStorage.setItem("user", JSON.stringify(user));
    
            // Alert.alert('Успешный вход!', `Добро пожаловать, ${user.userName}!`);
            login()
        } catch (error: any) {
            Alert.alert('Ошибка входа', error.message || 'Неверный email или пароль');
        }
    };
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#0EA2DE' barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} />

      <View style={styles.arrowBack}>
        <TouchableOpacity onPress={() =>
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'Welcome' }],
              })
            )}>
          <Image
            style={styles.arrowIcon}
            source={require('@/assets/images/auth-images/arrow-back.png')}
          />
        </TouchableOpacity>
      </View>

        <View style={{marginTop: 100}}>
            <View>
                <Text style={styles.header}>Log in</Text>
            </View>
        

            <View style={styles.formContainer}> 
                <View style={styles.listInputs}>
                    
                    <EmailForm email={email} emailError={emailError} 
                    onChangeText={(text) => validateEmail(text, setEmailError, setEmail)} />

                    <PasswordForm password={password} passwordError={passwordError} 
                    onChangeText={(text) => validatePassword(text, setPasswordError, setPassword)} />

                    <TouchableOpacity
                    disabled={!isFormValid}
                    style={[styles.button, { backgroundColor: isFormValid ? '#0EA2DE' : '#E6E6E6' }]}
                    onPress={() => handleLogin(email, password)}>
                        <Text style={[styles.buttonText, { color: isFormValid ? '#FFF' : '#808080' }]}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                                <Text style={styles.link}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>                    
            </View>

        </View>


      </SafeAreaView>
      
  );
}