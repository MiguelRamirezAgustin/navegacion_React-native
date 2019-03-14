/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,
        Button,
        View} from 'react-native';
import {createStackNavigator, createAppContainer } from 'react-navigation';

//vistas
import DetailsScreen from './controlador/DetailsScreen.js';        
import Contactos from './controlador/Contactos.js';

//Componente principal 
 class HomeScreen extends Component{
   static navigationOptions={
     title:'Home'
   };
  render() {
    return (
      <View style={styles.container}>
      
      <Text style={styles.textoTitulo}>Pantalla inicila de pruebas</Text>

       <View style={styles.conenedor_1}>

        <Button 
           title='pantalla 1'
           color= 'red'
           backgroundColor='green'
           borderRadius='10%'
          onPress={()=> this.props.navigation.navigate('Contacto')}
          />
       </View>
       <View style={styles.conenedor_2}>

       <Button 
         title='pantalla 2'
         color= '#008000'
         onPress={()=> {this.props.navigation.navigate('Details',{
           itemId:86,
            ontherParam:'Datos de parametro'
         });
        }}/>
        </View>
      </View>
    );
  }
}



const RootStack=createStackNavigator(
  {
  Home:HomeScreen,
  Details: DetailsScreen,
  Contacto: Contactos
 },
 {
   //initialRouteName;, indica el componente inicial
   initialRouteName:'Home',
 }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component{
    render(){
      return(
        <AppContainer/>
      )
    }
}


const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor: '#00CED1',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
  },
  textoTitulo:{
    justifyContent:'center',
    color:'black',
    fontWeight:'bold',
    fontSize: 20,
    marginTop: 5,
  },
  conenedor_1:{
    width: '100%',
    height: '30%',
    flex:1, 
    backgroundColor: 'steelblue',
    top:50
  },
  conenedor_2:{
    width: '100%',
    height: '30%',
    flex:1, 
    backgroundColor: 'red',
  }
});
