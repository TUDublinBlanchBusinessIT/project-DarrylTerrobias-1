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
    width: '90%',
    height: 50,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingLeft: 12,
    fontSize: 16,
    backgroundColor: '#f8f8f8',
    color: '#000',
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
    marginTop: 30,
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
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalOptionText: { 
    fontSize: 18,
  },
});
