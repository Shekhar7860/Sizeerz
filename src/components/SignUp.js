import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';

export default class SignuUp extends Component {

  goToLogin = () =>{
    this.props.navigation.navigate('Login')
   }
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
          <View style={styles.cardContainerSignUp}>
                    <Text style={styles.loginText}>SIGN UP</Text>
                    <View style={styles.borderWidthSignUp}>
                    <View
                style={styles.textBorder}
              />
                </View>
                <View style={{flex:1}}>
             <View style={styles.rowAlign}>
             <Image source={require('../images/email.png')} style={styles.icon}/>
             <TextInput placeholder="Email Id"></TextInput>
             </View>
             <View style={styles.topSpace}>
             <View style={styles.rowAlign}>
             <Image source={require('../images/phone.png')} style={styles.icon}/>
             <TextInput placeholder="Mobile Number" ></TextInput>
             </View>
             </View>
             <View style={styles.topSpace}>
             <View style={styles.rowAlign}>
             <Image source={require('../images/password.png')} style={styles.icon}/>
             <TextInput placeholder="Password" ></TextInput>
             </View>
             </View>
             <View style={styles.topSpace}>
             <View style={styles.rowAlign}>
             <Image source={require('../images/password.png')} style={styles.icon}/>
             <TextInput placeholder="Confirm Password" ></TextInput>
             </View>
             </View>
             </View>
            
      </View>
      </View>
           <View style={styles.loginContainer} >
            <TouchableNativeFeedback style={styles.buttonWidth} onPress={() => this.goToHome()}>
              <Text style={styles.signUpButton} >SIGN UP</Text>
            </TouchableNativeFeedback>
             </View>

      
      
      </ImageBackground>
      
    );
}


}