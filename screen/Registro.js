import React, { Component } from "react";
import { Container, 
         Content, 
         Card, 
         CardItem,
        Body,
        Text,
        Button,
        Item,
        Input,
        Icon,} from "native-base";

import {
  AppRegistry,
  TextInput,
  Alert,
  StyleSheet,
} from 'react-native';

import { api } from '../data/api';

class Registro extends Component {
  
  constructor(props){
    super(props)
    this.state={
     email:'',
     user: '',
     pass:'',
    }
  }

  register = () => api.registerData(this.state.user,this.state.email,this.state.pass)
 
  
  render(){
    const navegar = this.props.navigation;
          return (
            <Container>
            <Content contentContainerStyle = {styles.Content}>
              <Card>
                <CardItem header>
                <Text style={styles.TextCenter}>¿No tienes cuenta?</Text>
                  
                </CardItem>
                <CardItem >
                  <Text style={styles.TextCenter}>Registrate</Text>
                  
               </CardItem>
               <CardItem >
                    <Button secundary style={styles.Boton3}><Icon type='Entypo' name='facebook'/></Button>
                    <Button info style={styles.Boton2}><Icon type='AntDesign' name='twitter'/></Button>
                   
               </CardItem>
                <Text style={styles.TextCenter}>o</Text>
                
                <CardItem>
                  <Body bordered style={styles.Botono}>         
                  <Item>
                    
                 
                    <Icon type = 'FontAwesome'name ='user'/>
                    <Input placeholder='Usuario'
                    onChangeText={(user)=>this.setState({user})} />
                  </Item>
                  <Item last>
                    <Icon type = 'Entypo'name ='email'/>
                    <Input placeholder='Correo'
                    onChangeText ={(email)=>this.setState({email})} />
                  </Item>
                  
                  <Item last>
                   <Icon type = 'FontAwesome'name ='lock'/>
                   <TextInput placeholder = 'Constraseña'
                    onChangeText={(pass) =>this.setState({pass})}/>
                    
                  </Item>
                  </Body>
                </CardItem>
                <CardItem footer>
                  
                  <Button transparent nPress={() => navegar.navigate('Login')}>
                  <Text>Login</Text>
                  </Button>
                  <Button primary  style = {styles.Boton2} onPress={this.register} ><Text>Guardar</Text></Button>
                  
                 
                </CardItem>
            </Card>
            </Content>
          </Container>
        );
      }
    }
    
    const styles=StyleSheet.create({
      Content:{
        flex: 1,
        justifyContent: 'center',
    
      },
      TextCenter:{
        textAlign:'center',
        width:'100%',
        fontSize:20
      },
      Boton:{
        marginLeft:'55%',
        
      },
      Botono:{
        paddingVertical:'5%',
        
    
      },
      Boton2:{
        marginRight:'10%',
      },
      Boton3:{
        marginLeft:'30%',
      },
    });
AppRegistry.registerComponent('MainProject',()=> MainPRoject)
export default Registro;