import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dropdown: {
    width: '80%',
    height: 50,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
  },
  
  button: {
    width: '80%', 
    height: 50,
    backgroundColor: '#2d2d86', 
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, 
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18,   
    fontWeight: 'bold', 
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
