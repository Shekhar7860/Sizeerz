import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';

export default class ForgotPassword extends Component {
  render() {
    return (
     
      <ImageBackground
        source={require('../images/bg.png')}
        style={styles.container}>
          <View style={styles.imgContainer}>
          <TouchableNativeFeedback onPress={() => this.goToLogin()}>
          <Image source={require('../images/back.png')} style={styles.icon}/>
          </TouchableNativeFeedback>
          </View>
          <View style={styles.imageContainer}>
              <Image
              source={require('../images/1.png')}
              style={styles.imageWidth}/>
          </View> 
          <View style={styles.centerAlign}>
          <View style={styles.cardContainerForgot}>
                    <Text style={styles.loginText}>FORGOT PASSWORD</Text>
                    <View style={styles.borderWidthForgot}>
                    <View
                style={styles.textBorder}
              />
                </View>
                <View style={{flex:1}}>
             <Text style={styles.forgotText}>We just need your registed email address/mobile number to send you password reset</Text>
             <View style={styles.rowAlign}>
             <Image source={require('../images/email.png')} style={styles.icon}/>
             <TextInput placeholder="Email Id"></TextInput>
             </View>
             </View>
          </View>
          </View>
           <View style={styles.loginContainer} >
            <TouchableNativeFeedback style={styles.buttonWidth} onPress={() => this.goToHome()}>
              <Text style={styles.signUpButton} >SUBMIT</Text>
            </TouchableNativeFeedback>
             </View>
      </ImageBackground>
     
    );
}
}


