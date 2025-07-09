// src/presentation/screens/HolaScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PodadoraScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ficha tecnica de la Podadora</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 },
});
