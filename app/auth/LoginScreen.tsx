import React, { useState, useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  SafeAreaView,
  TextInput,
  Platform,
  Alert,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function LoginScreen({ navigation }: { navigation: any }) {  
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
    const handleSubmit = () => {
        if(email === 'test@test.com' && password === 'Test1234')
        {
            navigation.navigate('Main');
        } else {
            Alert.alert('Error', 'Wrong password.');
            return;
        }
    }
  
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
                    onPress={handleSubmit}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: width * 0.05,
  },
  formContainer: {    
    flexDirection: 'column',    
    rowGap: 20,
    alignItems: 'center',
  },
  listInputs: {
    flexDirection: 'column',    
    rowGap: 10,
    width: '100%',
  },
  arrowBack: {
    marginTop: height * 0.02,
    marginLeft: width * 0.02,    
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  arrowIcon: {
    width: width * 0.06,
    height: width * 0.06,
  },
  header: {
    fontSize: width * 0.05,
    alignSelf: 'center',
    marginTop: height * 0.08,
    marginBottom: height * 0.02,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#0EA2DE',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  buttonText: {
    fontSize: width * 0.04,
    color: '#FFF',
  },
  link: {
    color: '#808080',
    textDecorationLine: 'underline',
    fontSize: 14,
    textAlign: 'center',    
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#808080',
  },
  input: {
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 10,
    padding: 10,
    fontSize: width *   0.04,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: width * 0.035,
    marginBottom: 4,    
  },
  labelErrorText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
