import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SigninScreen } from '../screens/signin-screen';
import { WelcomeScreen } from '../screens/welcome-screen';

const Stack = createStackNavigator();

export const Navigation = ({ state }) => {
  // console.log('navigation screen', loginState);
  // console.log('navigation screen', userToken);
  return (
    <Stack.Navigator headerMode="none">
      {state.userToken != null ? (
        <Stack.Screen name="welcome" component={WelcomeScreen} />
      ) : (
        <Stack.Screen name="signin" component={SigninScreen} />
      )}
    </Stack.Navigator>
  );
};
