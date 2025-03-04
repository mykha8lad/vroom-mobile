import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { styles } from './WelcomePageStyles';

import {
  View,
  Text,
  Image,
  TouchableOpacity, 
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Google from 'expo-auth-session/providers/google'; 

interface User {
    id: number;
    name: string;
    email: string;    
}

const API_URL = "http://vroom.buhprogsoft.com.ua";

export default function WelcomePage({ navigation }: { navigation: any }) {
    const [userInfo, setUserInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  

    
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#0EA2DE' barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} />

      {/* Верхняя часть */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>Unleash your creativity</Text>
          <Image
            source={require('@/assets/images/auth-images/Person.png')}
            style={styles.headerImage}
          />  
        </View>
      </View>

      {/* Нижняя часть */}
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.sectionTitle}>Sign up</Text>

          {/* Кнопки регистрации */}          
          <TouchableOpacity style={[styles.button, { backgroundColor: '#0EA2DE' }]} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.buttonText}>Create account</Text>
          </TouchableOpacity>          

          {/* Разделитель */}
          <View style={styles.lineContainer}>
            <View style={styles.line} />
            <Text style={styles.lineText}>or</Text>
            <View style={styles.line} />
          </View>

          {/* Социальные кнопки */}
          <View style={{
            flexDirection: 'column',
            rowGap: 10
          }}>
          <TouchableOpacity style={[styles.button, { borderColor: '#000', borderWidth: 1 }]}>
            <View style={styles.iconContainer}>
              <Image style={styles.icon} source={require('@/assets/images/auth-images/Google.png')} />
            </View>
            <Text style={[styles.buttonText, { color: '#000' }]}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: '#1877F2' }]}>
            <View style={styles.iconContainer}>
              <Image style={styles.icon} source={require('@/assets/images/auth-images/Facebook.png')} />
            </View>
            <Text style={styles.buttonText}>Continue with Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: '#000' }]}>
            <View style={styles.iconContainer}>
              <Image style={styles.icon} source={require('@/assets/images/auth-images/Apple.png')} />
            </View>
            <Text style={styles.buttonText}>Continue with Apple</Text>
          </TouchableOpacity>
          </View>

          {/* Ссылка */}
          <TouchableOpacity
          style={{paddingVertical: 5, marginHorizontal: 70}}
          onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.link}>Already have an account?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}