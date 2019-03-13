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
  render() {
    return (
      <View style={styles.container}>
        <Text >Principal...!!</Text>
        <Button style={styles.botones}
         title='click'
         onPress={()=> this.props.navigation.navigate('Details')}
        />
        <Text >Principal...!!</Text>
         <Button style={styles.botones_1}
         title='click contactos'
         onPress={()=> this.props.navigation.navigate('Contacto')}
        />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  botones: {
    borderColor: '#800000',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
  },
  botones_1: {
    borderColor: '#845000',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
  }
});
