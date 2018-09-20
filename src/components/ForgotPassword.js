import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';
import Constants from '../constants/Constants';
import Service from '../services/Service';

export default class ForgotPassword extends Component {
  constructor(props){
    super(props);
    service = new Service();
    constants = new Constants();
    this.state = { 
      email:'',    
      emailError:'',
      emailFormatError:''
    }
  }

  submit = () =>{
    if ( !service.validateEmail(this.state.email)) {
      this.setState(() => ({ emailFormatError: "Proper Email Format is Required"}));
    } 
    else{
      this.setState(() => ({ emailFormatError: null}));
    }
    if (this.state.email.trim() === "") {
      this.setState(() => ({ emailError: " Email is required."}));
      this.setState(() => ({ emailFormatError: null}));
    } else {
      this.setState(() => ({ emailError: null})); 
    }
   
    }

  goToLogin = () =>{
    this.props.navigation.navigate('Login')
   }
  render() {
    return (
     
      <ImageBackground
       source={constants.background}
        style={styles.container}>
          <View style={styles.imgContainer}>
          <TouchableNativeFeedback onPress={() => this.goToLogin()}>
          <Image source={constants.backicon} style={styles.icon}/>
          </TouchableNativeFeedback>
          </View>
          <View style={styles.imageContainer}>
              <Image
              source={constants.logo}
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
             <Image source={constants.emailicon} style={styles.icon}/>
             <TextInput placeholder="Email Id" value={this.state.email} onChangeText={(text)=>this.setState({ email:text})}></TextInput>
             </View>
             {!!this.state.emailError && (
            <Text style={styles.error}>{this.state.emailError}</Text>
            )}
                   <Text style={styles.error}>{this.state.emailFormatError}</Text>
             </View>
          </View>
          </View>
           <View style={styles.loginContainer} >
            <TouchableNativeFeedback style={styles.buttonWidth} onPress={() => this.submit()}>
              <Text style={styles.signUpButton} >SUBMIT</Text>
            </TouchableNativeFeedback>
             </View>
      </ImageBackground>
     
    );
}
}


