// navigation/StackNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Detalhes from '../screens/Detalhes';
import Carrinho from '../screens/Carrinho'; // <--- Importar a tela de Carrinho
import Pagamento from '../screens/Pagamento';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#FFB6C1' }, // Rosa Pastel
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Entrar', headerShown: false }}
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Cardápio de Doces' }}
        />
        <Stack.Screen 
          name="Detalhes" 
          component={Detalhes} 
          options={{ title: 'Detalhes do Doce' }}
        />
        <Stack.Screen 
          name="Carrinho" 
          component={Carrinho} 
          options={{ title: 'Meu Carrinho' }}
        />
        <Stack.Screen
          name="Pagamento"
          component={Pagamento}
          options={{ title: 'Pagamento' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}