import React, { useState, useRef, useEffect } from 'react';
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
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function EmailConfirmationScreen({ navigation }: { navigation: any }) {  
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = Array.from({ length: 6 }, () => useRef<TextInput>(null));

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const isCodeComplete = code.every((digit) => digit !== '');
        setIsFormValid(isCodeComplete);
      }, [code]);

  const handleInputChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;

    setCode(newCode);
    
    if (text && index < inputs.length - 1) {
      inputs[index + 1].current?.focus();
    }
  };

  const handleKeyPress = (event: any, index: number) => {
    if (event.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputs[index - 1].current?.focus();
    }
  };

  const isCodeComplete = code.every((digit) => digit !== '');

  // Добавить логику проверки токена верификации, после чего пользователь может войти на главную страницу
  const handleSubmit = () => {
    if (isFormValid) {
      navigation.navigate('Main');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#0EA2DE' barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} />

      <View style={styles.arrowBack}>
        <TouchableOpacity>
          <Image
            style={styles.arrowIcon}
            source={require('@/assets/images/auth-images/arrow-back.png')}
          />
        </TouchableOpacity>
      </View>

        <View style={styles.formContainer}>            
                <View><Text style={{fontSize: 20}}>Confirm your email</Text></View>

                <Text style={{fontSize: 14, color: '#808080', textAlign: 'center'}}>Validate your email via 6-digit code we have sent you</Text>
                
                <View style={styles.inputRow}>
                    {code.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={inputs[index]}
                            value={digit}
                            onChangeText={(text) => handleInputChange(text, index)}
                            onKeyPress={(event) => handleKeyPress(event, index)}
                            style={styles.inputBox}
                            keyboardType='numeric'
                            maxLength={1}
                        />
                    ))}
                </View>
                
                <TouchableOpacity>
                    <Text style={styles.link}>Resend code</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                disabled={!isFormValid}
                style={[styles.button, 
                    {backgroundColor: isFormValid ? '#0EA2DE' : '#E6E6E6'}
                ]} onPress={handleSubmit}>
                    <Text style={[styles.buttonText,
                        {color: isFormValid ? '#FFF' : '#808080'}
                    ]}>
                        Continue
                    </Text>
                </TouchableOpacity>
                
        </View>

      </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,    
  },
  formContainer: {
    marginHorizontal: 8,
    marginTop: 100,
    padding: 12,
    flexDirection: 'column',
    rowGap: 20,
    alignItems: 'center',
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
    width: '60%',
    paddingVertical: 11,
    backgroundColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',        
  },
  buttonText: {
    fontSize: 16,
    color: '#808080',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 244,
  },
  inputBox: {
    width: 34,
    height: 44,
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  link: {
    color: '#808080',
    textDecorationLine: 'underline',
    fontSize: 16,
    textAlign: 'center',    
  },
});
