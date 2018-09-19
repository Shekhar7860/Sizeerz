import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';
import FloatingLabelInput from './FloatingLabel';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { LoginManager,   AccessToken } from 'react-native-fbsdk';
import Service from '../services/Service';



export default class Login extends Component {
  constructor(props){
    super(props);
    service = new Service();
  }
  componentDidMount() {
    this.setupGoogleSignin();
  } 

  fbSignIn = () =>{
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      result => {
        AccessToken.getCurrentAccessToken().then(
          (data) => {
                console.log(data.accessToken)
                this.getUserProfile(data.accessToken);
                console.log(data.userID);
      });
      },
      error => {
        console.log('Login fail with error: ' + error);
      }
    );
  }


  async setupGoogleSignin() {
    try {
      GoogleSignin.configure({
        clientID: '893224975013-3s5d4o0oo9bp83k1dr8ttfa7ois0in3u.apps.googleusercontent.com',
        scopes: ['openid', 'email', 'profile'],
        shouldFetchBasicProfile: true,
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
        console.log(userInfo);
      } catch (error) {
        console.log(error);
        this.props.navigation.navigate('Home')
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
  


  getUserProfile = (token) =>{ 
      fetch('https://graph.facebook.com/v2.9/me?fields=picture.width(720).height(720).as(picture_large),name,email,friends&access_token=' + token)
      .then((response) => response.json())
      .then((json) => {
        console.log('loginpage', json);
       service.saveUserData('user', json);
        this.props.navigation.navigate('Home', { user: json })
      })
      .catch((err) => {
      //  alert(JSON.stringify(err))
      })
     
      
   
  }
  logout = () => {
    LoginManager.logOut();
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
      <Text styles={styles.textCenter} onPress={() => this.logout()}>Or Connect With</Text>
      </View>
      <View style={styles.borderWidth3}>
      <View
        style={styles.textBorder2}
              >
                </View>
      </View>
      </View>
      <View style={styles.rowAlign3}>
      <TouchableNativeFeedback onPress={() => this.fbSignIn()}>
      <Image source={require('../images/fb.png')} style={styles.socialIcon}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => this.signIn()}>
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

