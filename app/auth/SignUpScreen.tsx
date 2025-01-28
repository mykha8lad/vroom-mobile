import React, { useState, useRef, useEffect } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { CommonActions } from '@react-navigation/native';

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
  TextInput,
  Platform,
  Alert,
  Animated,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SignUpScreen({ navigation }: { navigation: any }, width: any) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [repeatPasswordError, setRepeatPasswordError] = useState('');
        
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');  
    
    const [isFormValid, setIsFormValid] = useState(false);
    
    useEffect(() => {
        if (!usernameError && !emailError && !passwordError && !repeatPasswordError && username && email && password && repeatPassword && selectedDate) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [usernameError, emailError, passwordError, repeatPasswordError, username, email, password, repeatPassword, selectedDate]);

    const validateUsername = (text: string) => {        
        const usernameRegex = /^[a-zA-Z0-9._-]+$/;

        if (text.length < 1 || text.length > 20) {
            setUsernameError('Username must contain 1-20 characters');
        } else if (!usernameRegex.test(text)) {
            setUsernameError('Username contains unsupported characters');
        } else {
            setUsernameError('');
        }

        setUsername(text);
    };

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

    const validateRepeatPassword = (text: string) => {
        if (text !== password) {
            setRepeatPasswordError("Passwords don't match");
        } else {
            setRepeatPasswordError('');
        }
    
        setRepeatPassword(text);
    };

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    
    const handleConfirm = (date: any) => {
        const formattedDate = date.toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        });
        setSelectedDate(formattedDate);
        hideDatePicker();
    };

    // Функция обработчик отправки формы регистрации, добавить логику отправки данных на сервер
    // const handleSubmit = () => {
    //     if (usernameError || emailError || passwordError || repeatPasswordError) {
    //         Alert.alert('Error', 'Please fix the errors before continuing.');
    //         return;
    //     } else if (!username || !email || !password || !repeatPassword) {
    //         Alert.alert('Error', 'All fields must be filled.');
    //         return;
    //     } else {
    //         navigation.navigate('Confirmation');
    //     }
    // };  

    {/* AXIOS TEST API */}

    const handleRegistration = async () => { 
        if (usernameError || emailError || passwordError || repeatPasswordError) {
            Alert.alert('Error', 'Please fix the errors before continuing.');
            return;
        } else if (!username || !email || !password || !repeatPassword) {
            Alert.alert('Error', 'All fields must be filled adi.');
            return;
        }

        try {
            const response = await axios.post('http://vroom.buhprogsoft.com.ua/users', {
                username,
    email,
    password,
    dateOfBirth: selectedDate,
            });

            if (response.status === 201) {
                Alert.alert('Success', 'You have been registered successfully!');
                navigation.navigate('Confirmation');
            }
        } catch (error) {
            console.error(error);           
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

        <View>
            <Text style={styles.header}>Sign up</Text>
        </View>

        <View>
            <View style={styles.listInputs}>
                <View>
                    <View style={styles.labelErrorText}>
                        <Text style={styles.label}>Username</Text>
                        {usernameError !== '' && (
                            <Text style={styles.errorText}>
                                {usernameError}
                            </Text>
                        )}
                    </View>
                    <TextInput
                        style={[
                        styles.input,
                        usernameError !== '' && styles.inputError,
                        ]}
                        placeholder="@"
                        placeholderTextColor="#808080"
                        onChangeText={validateUsername}
                        value={username}
                    />
                </View>

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
                        placeholderTextColor="#808080"
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

                <View>
                    <View style={styles.labelErrorText}>
                        <Text style={styles.label}>Repeat password</Text>
                            {repeatPasswordError !== '' && (
                        <Text style={styles.errorText}>
                            {repeatPasswordError}
                        </Text>
                        )}
                    </View>
                    <TextInput
                        style={[
                        styles.input,
                        repeatPasswordError !== '' && styles.inputError,
                    ]}          
                        placeholderTextColor="#808080"
                        secureTextEntry
                        onChangeText={(text) => validateRepeatPassword(text)}
                        value={repeatPassword}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Date of Birth</Text>
                   
                    {/* Кнопка для выбора даты */}
                    <TouchableOpacity style={[styles.input, { width: width * 0.8 }]} onPress={showDatePicker}>
                        <Text style={{ color: selectedDate ? '#000' : '#808080' }}>
                            {selectedDate || 'Select Date'}
                        </Text>
                    </TouchableOpacity>

                    {/* Модальное окно выбора даты */}
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                        maximumDate={new Date()}
                        minimumDate={new Date(1900, 0, 1)}
                    />
                </View>
            </View>
        </View>
        
        <TouchableOpacity
        disabled={!isFormValid}
        style={[styles.button, { backgroundColor: isFormValid ? '#0EA2DE' : '#E6E6E6' }]}
        onPress={handleRegistration}>
            <Text style={[styles.buttonText, { color: isFormValid ? '#FFF' : '#808080' }]}>Continue</Text>
        </TouchableOpacity>

        <Text style={styles.bottomText}>
            Password must be 8-12 characters and contain both numbers and letters/special characters
        </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: width * 0.05, 
  },
  datePickerButton: {
    backgroundColor: '#f9f9f9',
  },
  pickerItem: {
    fontSize: 16,
    color: '#808080',
    height: 39,
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
  label: {
    fontSize: width * 0.035,
    marginBottom: 5,
    color: '#808080',
  },
  input: {
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 10,    
    height: 39,
    padding: 10,
    fontSize: width * 0.04,
  },
  dateOfBirthInput: {
    height: 39,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 10,
    justifyContent: 'center',
    height: 39,
    overflow: 'hidden',
  },
  picker: {
    fontSize: 16,
    height: 59,
    color: '#000',
    marginTop: Platform.OS === 'ios' ? -10 : 0,
  },
  dateOfBirthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: width * 0.02,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: 39,    
    alignItems: 'center',
    justifyContent: 'center',    
    marginVertical: height * 0.02,
  },
  buttonText: {
    fontSize: width * 0.045,
    color: '#FFF',    
  },
  listInputs: {
    flexDirection: 'column',
    rowGap: height * 0.015,
  },
  bottomText: {
    fontSize: width * 0.035,
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: width * 0.04,
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
