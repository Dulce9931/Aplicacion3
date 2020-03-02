/*Autor: Dulce Maria Mejia Maldonado     
Grupo: TI02SM-18
Fecha: 02/03/2020
Materia: Desarrollo Movil
Profesor:Hector Saldaña Benitez */

import React from 'react';
import 'react-native-gesture-handler';
import{ NavigationContainer }from '@react-navigation/native';
import{ createStackNavigator }from '@react-navigation/stack';
import Login from './screen/Login';
import Registro from './screen/Registro';
import Principal from './screen/Principal';
const Stack = createStackNavigator();


const App:() => React$Node = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={Login}/>
        <Stack.Screen
          name='Registro'
          component={Registro}/>
        <Stack.Screen
          name='Principla'
          component={Principal}/>
      </Stack.Navigator>
    </NavigationContainer>

  );

};

export default App;
