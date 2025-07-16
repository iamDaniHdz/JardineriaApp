// src/presentation/navigation/StackNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import HerramientaDetalleScreen from '../screens/HerramientaDetalleScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="Tabs" 
        component={TabNavigator} 
      />
      <Stack.Screen 
        name="Herramienta" 
        component={HerramientaDetalleScreen}
        options={({ route }) => {
          const categoria = route.params?.categoria || 'default';

          // Asignar color según la categoría
          let backgroundColor;
          switch (categoria) {
            case 'riego':
              backgroundColor = '#95a7bd';
              break;
            case 'fertilizante':
              backgroundColor = '#8ec1aa';
              break;
            case 'maquinaria':
              backgroundColor = '#fcc79b';
              break;
            case 'manual':
              backgroundColor = '#e88f8f';
              break;
            default:
              backgroundColor = '#ccc';
              break;
          }

          return {
            headerShown: true,
            headerTitle: 'Detalles',
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerStyle: { backgroundColor },
            headerTintColor: '#333', // Cambia si quieres texto blanco o negro
          };
        }}
      />

    </Stack.Navigator>
  );
}
