import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';
import FloatingLabelInput from './FloatingLabel';

export default class Login extends Component {
  
      goToSignUp = () =>{
       this.props.navigation.navigate('SignUp')
      }
      goToHome = () =>{
        this.props.navigation.navigate('Home')
       }
       goToForgot = () =>{
        this.props.navigation.navigate('ForgotPassword')
       }
      
      state = {
      value: '',
  };

  handleTextChange = (newText) => this.setState({ value: newText });


  render() {
    return (
      <ScrollView>
      <ImageBackground
        source={require('../images/bg.png')}
        style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.topText} onPress={() => this.goToHome()}>Skip</Text>
          </View>
          <View style={styles.imageContainer}>
              <Image
              source={require('../images/3.png')}
              style={styles.imageWidth}/>
          </View> 
          <View style={styles.centerAlign}>
          <View style={styles.cardContainer}>
                    <Text style={styles.loginText}>LOGIN</Text>
                    <View style={styles.borderWidth}>
                    <View
                style={styles.textBorder}
              />
                </View>
                <View style={{flex:1}}>
             <View style={styles.rowAlign}>
             <Image source={require('../images/email.png')} style={styles.icon}/>
             <TextInput placeholder="Email"></TextInput>
             </View>
             <View>
             <View style={styles.rowAlign}>
             <Image source={require('../images/password.png')} style={styles.icon}/>
             <TextInput placeholder="Password" ></TextInput>
             </View>
             </View>
             </View>
            
      </View>
      </View>
           <View style={styles.loginContainer} >
            <TouchableNativeFeedback style={styles.buttonWidth} onPress={() => this.goToHome()}>
              <Text style={styles.loginbutton} >Login</Text>
            </TouchableNativeFeedback>
             </View>

      <View style={styles.center}>
      <Text styles={styles.center} onPress={() => this.goToForgot()}>ForgotPassword ?</Text>
      <View style={styles.borderWidth2}>
      <View
        style={styles.textBorder2}
              >
      </View>
      </View>
     
      
      <View style={styles.rowAlign2}>
      <View style={styles.borderWidth3}>
      <View
        style={styles.textBorder2}
              >
                </View>
      </View>
      
      <View style={styles.center}>
      <Text styles={styles.textCenter}>Or Connect With</Text>
      </View>
      <View style={styles.borderWidth3}>
      <View
        style={styles.textBorder2}
              >
                </View>
      </View>
      
      </View>
      
      <View style={styles.rowAlign3}>
      <Image source={require('../images/fb.png')} style={styles.icon}/>
      <Image source={require('../images/gmail.png')} style={styles.icon}/>
      
      
      
      </View>
      <View style={styles.bottomText}>
        <Text>You Dont Have An Account? <Text style={styles.red} onPress={() => this.goToSignUp()}>Sign up</Text></Text>
      </View>
      </View>
      
      </ImageBackground>
      </ScrollView>
    );
  }
}

