import React from 'react';
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
 
const { width, height } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }: { navigation: any }) {
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
