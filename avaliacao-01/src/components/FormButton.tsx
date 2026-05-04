import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, ActivityIndicator } from 'react-native';

interface FormButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

export default function FormButton({ 
  disabled, 
  loading, 
  title, 
  ...props }: FormButtonProps) {

//{...props} — repassa quaisquer outras props recebidas, como onPress.

  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        (disabled || loading) ? styles.buttonDisabled : null
      ]} 
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color="#FFF" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2D2D2D',
    height: 55,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  buttonDisabled: {
    backgroundColor: '#AAA',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});