import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './style';
import { AuthContext } from '../../components/contex';

export const SigninScreen = () => {
  const [userName, setName] = useState('');
  const [password, setPassword] = useState('');

  const InputName = (name) => {
    if (name != null) {
      setName(name);
    }
    console.log('user name', userName);
  };

  const InputPassword = (password) => {
    if (password != null) {
      setPassword(password);
      console.log('password', password);
    }
  };
  const { signIn } = React.useContext(AuthContext);

  const Submit = (userName, password) => {
    signIn(userName, password);
    console.log('username and password', userName, password);
  };

  return (
    <View style={styles.CONTAINER}>
      <View style={styles.HEADER}>
        <Text style={styles.SIGINTXT}>Sigin Screen</Text>
      </View>
      <View style={styles.CONTENT}>
        <TextInput
          style={styles.box1}
          placeholder="Name"
          underlineColorAndroid="transparent"
          onChangeText={(name) => InputName(name)}
        />
        <TextInput
          style={styles.box1}
          placeholder="Password"
          onChangeText={(password) => InputPassword(password)}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.FOOTER}>
        <TouchableOpacity
          style={styles.btnsignup}
          onPress={() => {
            Submit(userName, password);
          }}
        >
          <Text style={styles.btnsignupText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
