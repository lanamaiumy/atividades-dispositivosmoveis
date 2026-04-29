import React, { useState } from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';
import { Screenfull } from './components/screen-wrappers/Screenfull';
import { ScreenScrollable } from './components/screen-wrappers/Screen-wrappers-scroll';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [showScrollable, setShowScrollable] = useState(false);

  if (showScrollable) {
    return (
      <ScreenScrollable gap={20} onRefresh={() => {}}>
        <StatusBar style="light" />
        <Text style={styles.title}>Catálogo feirinha</Text>
        <Button 
          title="Voltar para a tela inicial" 
          onPress={() => setShowScrollable(false)} 
        />
        
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </ScreenScrollable>
    );
  }

  return (
     <Screenfull center gap={20}>
      <Text style={styles.title}>Bem-vindo a feirinha!!</Text>
      <Button 
        title="Ir para catálogo" 
        onPress={() => setShowScrollable(true)} 
      />
    </Screenfull>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30, 
  },
  box: {
    height: 250,
    backgroundColor: '#cccccc',
    borderRadius: 8,
  }
});