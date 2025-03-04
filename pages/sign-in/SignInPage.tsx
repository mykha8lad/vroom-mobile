import { styles } from "./SignInPageStyles";
import React, { useState, useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from "@react-navigation/native";
import axios from 'axios';
import { useAuth } from "@/shared/auth.context";

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

export default function SignInPage({ navigation }: { navigation: any }, width: any) {  
    const { login } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
            if (!emailError && !passwordError && email && password) {
                setIsFormValid(true);
            } else {
                setIsFormValid(false);
            }
    }, [emailError, passwordError, email, password]);

    const validateEmail = (text: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(text)) {
            setEmailError('Please enter a valid email');
        } else {
            setEmailError('');
        }
        setEmail(text);
    };

    const validatePassword = (text: string) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*)[A-Za-z\d_]{8,12}$/;
        const startsWithNumberOrSpecial = /^[^A-Za-z]/;

        if (startsWithNumberOrSpecial.test(text) || !passwordRegex.test(text)) {
            setPasswordError('Please enter a valid password');        
        } else {
            setPasswordError('');
        }

        setPassword(text);
    };    

    // Функция обработчик отправки формы авторизации
    const handleLogin = async () => {    
            login();
            setTimeout(() => {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Main' }],
                });
            }, 500);
    }
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#0EA2DE' barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} />

      <View style={styles.arrowBack}>
        <TouchableOpacity onPress={() =>
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'WelcomePage' }],
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
                    <View>
                        <View style={styles.labelErrorText}>
                            <Text style={styles.label}>Email</Text>
                            {emailError !== '' && (
                                <Text style={styles.errorText}>
                                    {emailError}
                                </Text>
                            )}
                        </View>
                        <TextInput
                            style={[
                                styles.input,
                                emailError !== '' && styles.inputError,
                            ]} 
                            placeholder="example@example.com"           
                            placeholderTextColor='#808080'
                            onChangeText={validateEmail}
                        value={email}
                        />
                    </View>

                    <View>
                        <View style={styles.labelErrorText}>
                            <Text style={styles.label}>Password</Text>
                            {passwordError !== '' && (
                            <Text style={styles.errorText}>
                                {passwordError}
                            </Text>                    
                            )}
                        </View>
                        <TextInput
                            style={[
                                styles.input,
                                passwordError !== '' && styles.inputError,
                            ]}        
                                placeholderTextColor="#808080"
                                secureTextEntry
                                onChangeText={validatePassword}
                                value={password}
                        />
                    </View>

                    <TouchableOpacity
                    disabled={!isFormValid}
                    style={[styles.button, { backgroundColor: isFormValid ? '#0EA2DE' : '#E6E6E6' }]}
                    onPress={handleLogin}>
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