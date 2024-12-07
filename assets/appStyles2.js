import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    overflow: 'visible',
  },
  title: { 
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 30,
    color: '#333',
  },
  dropdown: { 
  minWidth: Platform.OS === 'web' ? 300 : '80%', // Set a fixed width for web users
  maxWidth: Platform.OS === 'web' ? 300 : '90%', // Ensure consistent width for web
  height: 50,
  marginBottom: 10, 
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  paddingLeft: 12,
  fontSize: 16,
  backgroundColor: '#f8f8f8',
  color: '#000',
  justifyContent: 'center', 
  },
  dropdownContainer: { 
    marginBottom: 15,
  },
  dropdownText: { 
    fontSize: 16,
    color: '#000',
  },
  button: { 
    height: 55,
    backgroundColor: '#2d2d86',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: { 
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  priceText: { 
    fontSize: 22,
    fontWeight: '700',
    marginTop: 30,
    color: '#333',
  },
  modalContainer: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: { 
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: { 
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalOption: { 
    padding: 12, 
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalOptionText: { 
    fontSize: 18,
  },
});
