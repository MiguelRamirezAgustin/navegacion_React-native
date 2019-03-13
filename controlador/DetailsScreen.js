import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View,
} from 'react-native';

class DetailsScreen extends Component{
    render(){
      return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
           <Text>Detalles</Text>
           
           <Button style={styles.botones}
           title='click.1'
           onPress={()=> this.props.navigation.push('Contacto')}/>
           <Button
            title='go to home'
            onPress={()=>this.props.navigation.navigate('Home')}
           />
           <Button
           title='go back'
           onPress={()=> this.props.navigation.goBack()}
           />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    botones: {
      borderColor: '#800000',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FF0000',
    }
  });

  export default DetailsScreen;