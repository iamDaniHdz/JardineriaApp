import React, { JSX } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HerramientasScreen from '../screens/HerramientasScreen';
import VoluntariosScreen from '../screens/VoluntariosScreen';
import ManualScreen from '../screens/ManualScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function getTabBarIcon(routeName: string) {
  return ({ color, size }: { color: string; size: number }) => {
    let iconName = 'help-circle-outline';
    if (routeName === 'Inicio') iconName = 'home-outline';
    else if (routeName === 'Herramientas') iconName = 'construct-outline';
    else if (routeName === 'Manuales') iconName = 'document-text-outline';
    else if (routeName === 'Voluntarios') iconName = 'people-outline';

    return <Icon name={iconName} size={size} color={color} />;
  };
}

export default function TabNavigator(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 60,
          paddingTop: 5,
        },
        tabBarIcon: getTabBarIcon(route.name),
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
