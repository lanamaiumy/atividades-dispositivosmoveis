import React, { ReactNode, useState } from 'react';
import { ScrollView, StyleSheet, RefreshControl } from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface ScreenScrollableInterface {
  children: ReactNode;
  padding?: number;
  gap?: number;
  onRefresh?: () => void;
}

export const ScreenScrollable = ({
  children,
  padding = 20,
  gap,
  onRefresh
}: ScreenScrollableInterface) => {
    
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        { padding: padding },
        gap ? { gap: gap } : null
      ]}
      refreshControl={
        onRefresh ? <RefreshControl refreshing={false} onRefresh={onRefresh} /> : undefined
      }
    >
      <StatusBar style="dark" />
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});