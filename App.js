import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Navigation } from './app/navigation/login';

import { NavigationContainer } from '@react-navigation/native';
import { initialLoginState, loginReducer } from './app/reducers/loginreducer';
import { actions } from './app/actions/actions';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from './app/navigation/contex';

const App = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => loginReducer(prevState, action),
    initialLoginState
  );

  const authContext = React.useMemo(() => actions(dispatch), []);

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log('catch effect', e);
      }
      console.log('user Token effect', userToken);
      dispatch({ type: 'REGISTER', token: userToken });
    }, 1000);
  }, []);

  if (state.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Navigation state={state} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
