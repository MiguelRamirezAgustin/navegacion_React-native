
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
            title='principal'
            onPress={()=> this.props.navigation.navigate('Home')}/>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    view_1:{
        backgroundColor:"#00FFFF",
    }

});

export default Contactos;

