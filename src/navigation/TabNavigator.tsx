import React, { JSX } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HerramientasScreen from '../screens/HerramientasScreen';
import VoluntariosScreen from '../screens/VoluntariosScreen';
import ManualScreen from '../screens/ManualScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabNavigator(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color, size }) => {
          let iconName = 'help-circle-outline';
          if (route.name === 'Inicio') iconName = 'home-outline';
          else if (route.name === 'Herramientas') iconName = 'construct-outline';
          else if (route.name === 'Manuales') iconName = 'document-text-outline';
          else if (route.name === 'Voluntarios') iconName = 'people-outline';

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        headerShown: route.name !== 'Inicio',
      })}
    >
      <Tab.Screen 
        name="Inicio" 
        component={HomeScreen} 
      />
      <Tab.Screen 
        name="Herramientas" 
        component={HerramientasScreen}
        options={{ 
          title: 'Maquinas y herramientas',
          tabBarLabel: 'Herramientas',
          headerShown: true,
          headerTitle: 'Herramientas',
          headerTitleAlign: 'left',
          //headerStyle: { backgroundColor: '#25533f' },
          //headerTintColor: '#fff',
          //headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
          headerShadowVisible: false,
        }}
      />
      <Tab.Screen 
        name="Manuales" 
        component={ManualScreen} 
      />
      <Tab.Screen 
        name="Voluntarios" 
        component={VoluntariosScreen} 
      />
    </Tab.Navigator>
  );
}
