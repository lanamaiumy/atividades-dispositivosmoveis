import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface ScreenfullInterface {
  children: ReactNode; 
  center?: boolean; 
  padding?: number;
  gap?: number;
}

export const Screenfull = ({ 
  children, 
  center, 
  padding = 20, 
  gap 
}: ScreenfullInterface) => {
  
  return (
    <View 
      style={[ 
        styles.container,
        { padding: padding },
        gap ? { gap: gap } : null,
        center ? styles.center : null
      ]}
    >
      <StatusBar style="dark" />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});