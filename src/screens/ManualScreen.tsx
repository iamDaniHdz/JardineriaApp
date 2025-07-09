import React, { JSX } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ManualScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Manual Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
