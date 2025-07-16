import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import CardComponent from '../components/CardComponent';
import herramientas from '../data/herramientas.json';
import imageMapper from '../utils/imageMapper';

const categorias = [
  { label: 'Todos', value: 'Todos' },
  { label: 'Riego', value: 'riego' },
  { label: 'Fertilizante', value: 'fertilizante' },
  { label: 'Maquinaria', value: 'maquinaria' },
  { label: 'Manual', value: 'manual' },
];

const groupByTwo = (items: any[]) => {
  const grouped = [];
  for (let i = 0; i < items.length; i += 2) {
    grouped.push(items.slice(i, i + 2));
  }
  return grouped;
};

const HomeScreen = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

  const herramientasFiltradas =
    categoriaSeleccionada === 'Todos'
      ? herramientas
      : herramientas.filter(
          h =>
            h.categoria &&
            h.categoria.toLowerCase() === categoriaSeleccionada.toLowerCase()
        );

  const filas = groupByTwo(herramientasFiltradas);

  return (
    <View style={styles.wrapper}>
      {/* Filtros */}
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.filtroContainer}
        >
          {categorias.map(({ label, value }) => (
            <TouchableOpacity
              key={value}
              onPress={() => setCategoriaSeleccionada(value)}
              style={[
                styles.filtroBoton,
                categoriaSeleccionada === value && styles.filtroActivo,
              ]}
            >
              <Text
                style={[
                  styles.filtroTexto,
                  categoriaSeleccionada === value && styles.filtroTextoActivo,
                ]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Tarjetas */}
      <ScrollView contentContainerStyle={styles.container}>
        {filas.map((fila, index) => (
          <View key={index} style={styles.row}>
            {fila.map(herramienta => (
              <CardComponent
                key={herramienta.id}
                nombre={herramienta.nombre}
                modelo={herramienta.modelo}
                imagen={imageMapper[herramienta.imagen]}
                categoria={herramienta.categoria}
                descripcion={herramienta.descripcion}
                marca={herramienta.marca}
                riesgos={herramienta.riesgos}
                medidas_seguridad={herramienta.medidas_seguridad}
                ficha_tecnica_url={herramienta.ficha_tecnica_url}
                manual_usuario_url={herramienta.manual_usuario_url}
                manejo_aplicacion={herramienta.manejo_aplicacion}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  filtroContainer: {
    paddingHorizontal: 18,
    paddingBottom: 10,
  },
  filtroBoton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#efefef',
    borderRadius: 25,
    marginRight: 8,
  },
  filtroTexto: {
    color: '#333',
    fontWeight: '500',
    padding: 0,
    margin: 0,
  },
  filtroActivo: {
    backgroundColor: 'green',
    //backgroundColor: '#25533f',
    //backgroundColor: '#B38B59',
    fontWeight: '500',
  },
  filtroTextoActivo: {
    color: '#fff',
  },
  container: {
    //paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 16,
  },
});

export default HomeScreen;
