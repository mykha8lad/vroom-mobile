import {
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  label: {
    fontSize: width * 0.035,
    marginBottom: 5,
    color: '#808080',
  },
  input: {
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 10,    
    height: 39,
    padding: 10,
    fontSize: width * 0.04,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: width * 0.035,
    marginBottom: 4,    
  },
  labelErrorText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});