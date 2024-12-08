import { StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#111109',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    fontWeight: 'bold', 
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#884dff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
  },
  linkText: {
    color: '#bb99ff',
    fontSize: 14,
    borderColor: '#ddd',
    fontWeight: 'bold', 
    textDecorationLine: 'underline', 
  },
});

export default appStyles;
