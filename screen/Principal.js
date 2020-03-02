/*Autor: Dulce Maria Mejia Maldonado     
Grupo: TI02SM-18
Fecha: 02/03/2020 
Materia: Desarrollo Movil
Profesor:Hector Saldaña Benitez */
import React, { Component } from 'react';
import { View, Text, Button, } from 'react-native';



class Perfil extends Component {

  render() {
    const navegar = this.props.navigation;
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Hola {this.props.route.params.usuario}</Text>
        <Text style={styles.title}>Tu contraseña es {this.props.route.params.contra}</Text>
        <Button
                title='Regresar'
                onPress={() => navegar.navigate('Login')}
              /> 
            
      </View>
    );
  }
}

export default Perfil;
