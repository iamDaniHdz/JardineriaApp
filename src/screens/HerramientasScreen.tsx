import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HerramientasScreen() {
  const navigation = useNavigation();

    return (
    
    <View style={styles.container}>
          <TouchableHighlight 
          underlayColor={'#319b7f'}
          style={styles.customBox} onPress={() => navigation.navigate('Podadora')}>
            <View>
              <Text style={styles.boxText}>Podadora</Text>
            </View>
          </TouchableHighlight>
        </View>
  );

  }
  
  const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center' 
    },
    customBox: {
      backgroundColor: '#3ab795',
      padding: 20,
      borderRadius: 10,
    },
    boxText: {
      color: 'white',
      fontSize: 16,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 25,
      borderRadius: 10,
      minWidth: 250,
      alignItems: 'center',
    },
    modalText: {
      fontSize: 20,
    },
  });
  