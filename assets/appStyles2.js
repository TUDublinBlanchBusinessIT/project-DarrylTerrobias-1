import { StyleSheet, Platform, Dimensions  } from 'react-native';

const screenWidth = Dimensions.get('window').width; // Get screen width

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
    width: Platform.select({
      web: '50%', // Use percentage for web
      default: screenWidth * 0.5, // Use screen width for mobile
    }),
    maxWidth: Platform.OS === 'web' ? 300 : undefined, // Optional: Limit web button width
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
  topBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end', // Aligns the button to the right
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF', // Optional: add a background color
  },

  backButton: {
    backgroundColor: '#2d2d86',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },

  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
