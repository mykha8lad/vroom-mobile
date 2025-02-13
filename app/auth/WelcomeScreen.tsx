// web 458933853345-vihu4k2b0e874656lqf51ujh2f4daqs3.apps.googleusercontent.com
// ios 458933853345-8fhcnspbavff0idg1i1t09bpe1n8gbeb.apps.googleusercontent.com
// android 458933853345-fpi0273p78fe5rc75p6s6vreul3g9htt.apps.googleusercontent.com
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,  
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Google from 'expo-auth-session/providers/google';
 
const { width, height } = Dimensions.get('window');

interface User {
    id: number;
    name: string;
    email: string;    
}

const API_URL = "http://vroom.buhprogsoft.com.ua";

export default function WelcomeScreen({ navigation }: { navigation: any }) {
    const [userInfo, setUserInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "458933853345-fpi0273p78fe5rc75p6s6vreul3g9htt.apps.googleusercontent.com",
    iosClientId: "458933853345-8fhcnspbavff0idg1i1t09bpe1n8gbeb.apps.googleusercontent.com",
    webClientId: "458933853345-vihu4k2b0e874656lqf51ujh2f4daqs3.apps.googleusercontent.com", // Если нужно
    scopes: ["profile", "email"],
    responseType: "id_token",
  });

    useEffect(() => {
        if (response?.type === "success") {
          handleSignInWithGoogle(response.authentication?.idToken);
        }
      }, [response]);

    const handleSignInWithGoogle = async (idToken: string | undefined) => {
        if (!idToken) return;
        setLoading(true);
        try {
          const res = await axios.post(`${API_URL}/auth_google`, { token: idToken });
          const user = res.data;
    
          // Сохраняем данные пользователя
          await AsyncStorage.setItem("@user", JSON.stringify(user));
          setUserInfo(user);
        } catch (error) {
          console.error("Ошибка авторизации:", error);
        } finally {
          setLoading(false);
        }
      };

    
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
          <TouchableOpacity style={[styles.button, { borderColor: '#000', borderWidth: 1 }]} onPress={() => promptAsync()}>
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
          onPress={() => navigation.navigate('LogIn')}>
            <Text style={styles.link}>Already have an account?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',    
  },
  header: {
    backgroundColor: '#0EA2DE',
    paddingTop: Platform.OS === 'android' ? 30 : 50,
    alignItems: 'center',
  },
  headerContent: {
    alignItems: 'center',
    justifyContent: 'space-between',
    rowGap: height * 0.04,
  },
  headerText: {
    color: '#FFF',
    fontSize: width * 0.05,
    textAlign: 'center',    
  },
  headerImage: {    
    height: height * 0.3,
    width: width * 0.8,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    paddingTop: height * 0.04,
    paddingHorizontal: width * 0.05,
  },
  bodyContent: {
    width: '100%',
    rowGap: height * 0.03,
  },
  sectionTitle: {
    fontSize: width * 0.05,
    textAlign: 'center',
  },
  button: {
    borderRadius: 10,
    width: '100%',
    paddingVertical: height * 0.015,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
  },
  buttonText: {
    fontSize: width * 0.04,
    color: '#FFF',
  },
  iconContainer: {
    position: 'absolute',
    left: width * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: width * 0.05,
    height: width * 0.05,
  },
  link: {
    color: '#0EA2DE',
    textDecorationLine: 'underline',
    fontSize: width * 0.035,
    textAlign: 'center',    
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',    
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#808080',
  },
  lineText: {
    marginHorizontal: width * 0.02,
    color: '#000',
    fontSize: width * 0.035,
  },
});
