
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View
} from 'react-native';


class Contactos extends Component {
    render(){
        return(
          <View style={styles.view_1}>
           <View style={styles.view_2}>
           <Button 
            title='Inicio'
            style={styles.boton1}
            onPress={()=> this.props.navigation.navigate('Home')}/>
          </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    view_1:{
        flex: 1,
        backgroundColor:"#ADFF2F",
    },
    view_2:{
        flex: 1,
        backgroundColor:"#FF8C00",
    },
    boton1:{
        color:'red'
    }
});

export default Contactos;

