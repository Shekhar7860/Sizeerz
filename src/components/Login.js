import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, ImageBackground, Button} from 'react-native';
import styles from '../styles/styles';

export default class Login extends Component {
  
    openDrawer = () =>{
       this.props.navigation.navigate('Home')
      }

  render() {
    return (
      <View style={styles.card}>
          <Text style={styles.loginText}>LOGIN</Text>
          <TextInput> Email </TextInput>
          <TextInput> Password </TextInput>
          <Button style={styles.loginbutton} title="Login" onPress={() => this.openDrawer()}></Button>
      </View>
    );
  }
}

