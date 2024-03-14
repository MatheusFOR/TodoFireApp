import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import List from './app/screens/List';
import Login from './app/screens/Login';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const  Stack = createNativeStackNavigator();

export default function App() {
// const [authenticated, setAuthenticated] = useState(false);
  
useEffect(() => {
  onAuthStateChanged
})

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Minhas tarefas">
        <Stack.Screen name='Minhas tarefas' component={List} />
        {/* <Stack.Screen name='Login' component={Login} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
