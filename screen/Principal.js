/*Autor: Dulce Maria Mejia Maldonado     
Grupo: TI02SM-18
Fecha: 02/03/2020 
Materia: Desarrollo Movil
Profesor:Hector Saldaña Benitez */
import React, { Component } from 'react';
import { View, Text, Button, ActivityIndicator,Switch } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';



class Principal extends Component {

  constructor(props){
    super(props);
    this.state = {isloading: true}




    
  }//end constructor 
    async componentDidMount(){
  try {
        const response = await fetch('https://swapi.co/api/films');
        const responseJson = await response.json();//await es la promesa
        this.setState({
          isloading: false,
          dataSource: responseJson.results
        }, function () {
        });
      }
      catch (error) {
        console.error(error);
      }
}//end componentDidMount
state = {switchValue:false}
toggleSwitch = (value) => {
    
    this.setState({switchValue: value})
   
 }


  render() {
    if(this.isloading){
      return(
        <View style={{flex: 1,padding:20}}>
          <ActivityIndicator/>
        </View>

      );
    }

    const navegar = this.props.navigation;
    return (
      <View >
        <Text>Hola {this.props.route.params.usuario}</Text>
        <Text>Tu contraseña es {this.props.route.params.contra}</Text>
        <Text class="color">USO DE API´s</Text>
     
        <FlatList
        data={this.state.dataSource}
    renderItem={({item})=><Text>{item.title},{item.releaseYear}</Text>}
    keyExtractor={({id},index)=> id}/>
       <Button
            title='Regresar'
            onPress={()=> navegar.navigate('Login')}
            

        />
        {/*Text to show the text according to switch condition*/}
        <Text>{this.state.switchValue?'Switch is ON':'Switch is OFF'}</Text>
        {/*Switch with value set in constructor*/}
        {/*onValueChange will be triggered after switch condition changes*/}
        <Switch
          style={{marginTop:30}}
          onValueChange = {this.toggleSwitch}
          value = {this.state.switchValue}/>
              
            
      </View>
    );
  }
}

export default Principal;
