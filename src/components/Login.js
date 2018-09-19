import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';
import FloatingLabelInput from './FloatingLabel';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';


GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'], 
  webClientId: '893224975013-7d7mmu5atns1on05np9j0ijc8r3ua945.apps.googleusercontent.com', 
  offlineAccess: true, 
  hostedDomain: '', 
  forceConsentPrompt: true,
  accountName: '', 
});
export default class Login extends Component {

  componentDidMount() {
    this.setupGoogleSignin();
  } 

  async setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], 
        webClientId: '893224975013-7d7mmu5atns1on05np9j0ijc8r3ua945.apps.googleusercontent.com', 
        offlineAccess: true, 
        hostedDomain: '', 
        forceConsentPrompt: true,
        accountName: '', 
      });
    }
    catch (err) {
      console.log("Google signin error", err.code, err.message);
    }
  }
  
  signIn = async () => {
    try {
    await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo)
      this.setState({ userInfo });
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  googleAuth() {
    GoogleSignin.signIn()
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log('WRONG SIGNIN', err);
      })
      .done();
  }
 
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
      
      <ImageBackground
        source={require('../images/bg.png')}
        style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.topText} onPress={() => this.goToHome()}>Skip</Text>
          </View>
          <View style={styles.imageContainer}>
              <Image
              source={require('../images/1.png')}
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
      
      <Text styles={styles} onPress={() => this.goToForgot()}>ForgotPassword ?</Text>
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
      <Image source={require('../images/fb.png')} style={styles.socialIcon}/>
      <TouchableNativeFeedback onPress={() => this.googleAuth()}>
      <Image source={require('../images/gmail.png')} style={styles.socialIcon} />
      </TouchableNativeFeedback>
      
      
      
      </View>
      <View style={styles.bottomText}>
        <Text>You Dont Have An Account? <Text style={styles.red} onPress={() => this.goToSignUp()}>Sign up</Text></Text>
      </View>
      
      </View>
      
      </ImageBackground>
     
    );
  }
}

