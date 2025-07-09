import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableHighlight 
      underlayColor={'#319b7f'}
      style={styles.customBox} onPress={() => setModalVisible(true)}>
        <View>
          <Text style={styles.boxText}>Toca aquí para mostrar el modal</Text>
        </View>
      </TouchableHighlight>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>Hola Mundo</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
