import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../auth/WelcomeScreen';
import SignUpScreen from '../auth/SignUpScreen';
import LoginScreen from '../auth/LoginScreen';
import EmailConfirmationScreen from '../auth/EmailConfirmationScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="LogIn" component={LoginScreen} />
      <Stack.Screen name="Confirmation" component={EmailConfirmationScreen} />
    </Stack.Navigator>
  );
}