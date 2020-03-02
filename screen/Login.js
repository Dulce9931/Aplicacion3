/*Autor: Dulce Maria Mejia Maldonado     
Grupo: TI02SM-18
Fecha: 02/03/2020
Materia: Desarrollo Movil
Profesor:Hector Saldaña Benitez */
import React, { Component } from "react";
import { Container, View, Content, Card, CardItem, Text, Body, Button, Item, Label, Input, Icon } from "native-base";
import {
  StyleSheet,
  ActivityIndicator
} from 'react-native';



class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {usuario: '', contra: ''};
  }
  state = {showIndicator:false}
  onButtonPress = () => {
      this.setState({
      showIndicator: true
      }),this.props.navigation.navigate('Principal',{contra: this.state.contra, usuario: this.state.usuario})};

  render(){
  const navegar = this.props.navigation;
  if(this.state.showIndicator){
      return(
          <View style={misEstilos.content}>
              
              <ActivityIndicator size="large" color="#FF0000"/>
              
          </View>

      );
    
  }
  else{
    return (
        <>
        
        <Container>
            <Content padder contentContainerStyle = {misEstilos.content}>
            <Card>
                <CardItem header bordered >
    <Text style = {misEstilos.textCenter} >Login</Text>
                </CardItem>
                <CardItem bordered>
                <Body style = {misEstilos.body}>
                    <Item lineLabel>
                        <Icon type = 'FontAwesome' name = 'user-circle-o'></Icon>
                        <Input type="text" 
                                placeholder="Usuario"
                                value= {this.state.usuario}
                                onChangeText= {(usuario) => this.setState({usuario})}
                        />

                    </Item>
                  
                    <Item lineLabel>
                        <Icon type = 'Ionicons' name = 'ios-lock'></Icon>
                        <Input type="text" placeholder = 'Constraseña' 
                            value= {this.state.contra}
                            onChangeText= {(contra) => this.setState({contra})}/>
                    </Item>
                </Body>
                </CardItem>
                <CardItem footer bordered >
                
                
                <Button success onPress={() => navegar.navigate('Registro')} ><Text> Registrarse </Text></Button>
            
                </CardItem>
                <CardItem footer bordered>
                
                <Button primary onPress={this.onButtonPress} ><Text> Iniciar Sesión </Text></Button>
                </CardItem>
            </Card>
            </Content>
        </Container>
        
        
        </>
    );
    }
    }
}


const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
   
  
  },

  textCenter: {
    textAlign: 'center',
    width: '100%',
    color: 'black',
    fontSize:30,
  },


  centrar: {
    flex: 1,
    marginLeft: '50%',
    justifyContent: 'center'
  },


});

export default Login;