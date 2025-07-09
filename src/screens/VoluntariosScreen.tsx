import React, { JSX } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function VoluntariosScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Voluntarios Screen</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
