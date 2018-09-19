import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';

export default class Home extends Component {
    openDrawer = () =>{
        // console.log(this.props);
        this.props.navigation.navigate('DrawerOpen')}
    searchPage = () =>{
    alert("searching Page")
          
        }
  render() {
    return (
        <ImageBackground
        source={require('../images/bg03.png')}
        style={styles.container}>
      
      <View style={styles.toolbar} >
          <TouchableNativeFeedback onPress={() => this.openDrawer()}>
          <Image source={require('../images/menu.png')} style={styles.hamburgerIcon} />
          </TouchableNativeFeedback>
           <Text style={styles.toolbarTitle}>Home</Text>
           <TouchableNativeFeedback onPress={() => this.searchPage()}>
          <Image source={require('../images/search.png')} style={styles.searchIcon} />
          </TouchableNativeFeedback>
       </View>
       <View style={styles.homeContent}>
           <View style={styles.messageBox}>
           <Image source={require('../images/home_img.png')} style={styles.cardImage}/>
           </View>
       </View>
   </ImageBackground>
      
     
    );
  }
}
