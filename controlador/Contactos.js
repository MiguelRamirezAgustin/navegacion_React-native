
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
            <Button 
            title='Inicio'
            color='#00008B'
            width='20%'
            fontSize="20%"
            borderRadius= '3'
            onPress={()=> this.props.navigation.navigate('Home')}/>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    view_1:{
        flex: 1,
        backgroundColor:"#ADFF2F",
    }
});

export default Contactos;

