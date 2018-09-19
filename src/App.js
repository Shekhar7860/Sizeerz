
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Splash from './components/Splash';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import SideMenu from './components/SideMenu';

// Sidemenu
export const Menu = DrawerNavigator({
  Home: { screen: Home},
  SignUp: { screen: SignUp},
  
}, {
  contentComponent: SideMenu,
  drawerWidth: 300
});

// routing 
const AppNavigator = StackNavigator(
  {
    Splash: { screen: Login},
    Login: { screen: Login},
    Home: { screen: Menu},
    SignUp: { screen: SignUp},
    ForgotPassword:{ screen : ForgotPassword}
  },
  { headerMode: 'none' }
);

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}


