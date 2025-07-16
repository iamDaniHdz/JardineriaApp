import React from 'react';
import { Linking } from 'react-native';
import { View, Text, StyleSheet, Image, ScrollView, TouchableHighlight } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

type Params = {
  Herramienta: {
    nombre: string;
    modelo: string;
    imagen: any;
    categoria: string;
    marca: string;
    descripcion: string;
    riesgos: string[];
    medidas_seguridad: string[];
    ficha_tecnica_url: string;
    manual_usuario_url: string;
    manejo_aplicacion: string[];
  };
};

const HerramientaScreen = () => {
  const route = useRoute<RouteProp<Params, 'Herramienta'>>();
  const {
    nombre,
    modelo,
    imagen,
    categoria,
    descripcion,
    riesgos,
    marca,
    medidas_seguridad,
    ficha_tecnica_url,
    manual_usuario_url,
    manejo_aplicacion,
  } = route.params;

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
    <ScrollView style={[styles.wrapper, { backgroundColor }]}>
      
      <Image source={imagen} style={styles.image} />
      
      <View style={styles.dataContainer}>
        <Text style={styles.subtitle}>{nombre} | {marca}</Text>
        <Text style={styles.title}>{modelo}</Text>

        {ficha_tecnica_url !== null && (
          <View style={styles.buttonContainer}> 
            <TouchableHighlight
              style={[styles.button, { backgroundColor: primaryColor }]}
              underlayColor={backgroundColor} // Cambia este color según el efecto que desees al presionar
              onPress={() => Linking.openURL(ficha_tecnica_url)}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="document-text" size={18} color="#fff" />
                <Text style={styles.buttonText}>Ficha técnica</Text>
              </View>
            </TouchableHighlight>
          </View>
        )}

        {manual_usuario_url !== null && (
          <View style={styles.buttonContainer}> 
            <TouchableHighlight
              style={[styles.button, { backgroundColor: primaryColor }]}
              underlayColor={backgroundColor} // Cambia este color según el efecto que desees al presionar
              onPress={() => Linking.openURL(manual_usuario_url)}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="document-text" size={18} color="#fff" />
                <Text style={styles.buttonText}>Manual de instrucciones</Text>
              </View>
            </TouchableHighlight>
          </View>
        )}
        
        <Text style={styles.sectionTitle}>Descripción</Text>
        <Text style={styles.text}>{descripcion}</Text>

       {manejo_aplicacion && manejo_aplicacion.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Manejo y aplicación</Text>
            {manejo_aplicacion.map((manejo, index) => (
              <Text key={index} style={styles.listItem}>• {manejo}</Text>
            ))}
          </>
        )}

            
        <Text style={styles.sectionTitle}>Riesgos</Text>
        {riesgos.map((riesgo, index) => (
          <Text key={index} style={styles.listItem}>• {riesgo}</Text>
        ))}

        <Text style={styles.sectionTitle}>Medidas de seguridad</Text>
        {medidas_seguridad.map((medida, index) => (
          <Text key={index} style={styles.listItem}>• {medida}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  dataContainer: {
    padding: 40,
    borderTopRightRadius: 50,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
  image: {
    width: '100%',
    height: 220,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
    fontWeight: '300',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#434343',
  },
  text: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '300',
    lineHeight: 24,
  },
  listItem: {
    fontSize: 15,
    color: 'gray',
    marginBottom: 4,
    fontWeight: '300',
    lineHeight: 24,
  },
});

export default HerramientaScreen;
