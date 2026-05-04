import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface FormInputProps extends TextInputProps {
  label: string;
  error?: string;
}

export default function FormInput({ 
  error, 
  label, 
  ...props }: FormInputProps) {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      
      <TextInput
        style={[
          styles.input,
          error ? styles.inputError : null
        ]}
        placeholderTextColor="#999"
        {...props}
      />
      
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  input: {
    height: 50,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
  },
  inputError: {
    borderColor: '#ff8181ff',
  },
  errorText: {
    color: '#ff8181ff',
    fontSize: 12,
    marginTop: 4,
  },
});
