import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface Props {
  nombre: string;
  modelo: string;
  imagen: any;
  categoria: string;
}


const CardComponent = ({ nombre, modelo, imagen, categoria }: Props) => {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Herramienta');
  };

  let backgroundColor;
  let primaryColor;
    switch (categoria) {
      case 'riego':
        backgroundColor = '#95a7bd';
        primaryColor = '#022d65';
        break;
      case 'fertilizante':
        backgroundColor = '#8ec1aa';
        primaryColor = '#25533f';
        break;
      case 'maquinaria':
        backgroundColor = '#fcc79b';
        primaryColor = '#e36601';
        break;
      case 'manual':
        backgroundColor = '#e88f8f';
        primaryColor = '#b71c1c';
        break;
      default:
        backgroundColor = '#808080';
        primaryColor = '#1f1f1f';
        break;
    }

  return (
    <View style={[styles.card, { backgroundColor }]}>
      <View style={styles.imageContainer}>
        <Image source={imagen} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.subtitle}>{nombre}</Text>
          <Text style={styles.title}>{modelo}</Text>
        </View>
        <View> 
          <TouchableOpacity style={[styles.iconButton, { backgroundColor: primaryColor }]} onPress={handlePress}>
            <Icon name="document-text" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;
const cardSize = (screenWidth - 48) / 2; // 16px margin each side + 16px between cards

const styles = StyleSheet.create({
  card: {
    width: cardSize,
    height: '100%', // Adjust height as needed
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    marginHorizontal: 6,
  },
  image: {
    width: 150,
    height: 150,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    paddingBottom : 0,
    
  },
  content: {
    padding: 10,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#434343',
    margin: 0,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    margin: 0,
  },
  iconButton: {
    backgroundColor: '#022d65',
    padding: 8,
    borderRadius: 50,
  },
});

export default CardComponent;
