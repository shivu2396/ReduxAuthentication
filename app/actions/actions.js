import AsyncStorage from '@react-native-community/async-storage';

export const actions = (dispatch) => ({
  signIn: async (userName, password) => {
    let userToken;
    userToken = null;
    if (userName != '' && password != '') {
      try {
        userToken = ' ';

        await AsyncStorage.setItem('userToken', userToken);
      } catch (e) {
        console.log('catch login', e);
      }
    } else {
      console.log('not called');
    }
    console.log('user Token', userToken);
    dispatch({ type: 'LOGIN', id: userName, token: userToken });
  },
  logOut: async () => {
    try {
      await AsyncStorage.removeItem('userToken');
    } catch (e) {
      console.log('catch lo out', e);
    }
    dispatch({ type: 'LOGOUT' });
  },
});
