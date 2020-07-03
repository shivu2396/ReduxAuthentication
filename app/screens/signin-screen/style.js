import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  CONTAINER: {
    flex: 1,
    backgroundColor: 'white',
  },
  HEADER: {
    height: '15%',
    justifyContent: 'center',
  },
  SIGINTXT: {
    textAlign: 'center',
    fontSize: 20,
  },
  CONTENT: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
    width: '90%',
  },

  FOOTER: {
    marginVertical: 40,
  },
  btnsignup: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: 'black',
    borderRadius: 15,
    marginHorizontal: 35,
  },
  btnsignupText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
});
