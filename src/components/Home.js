import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';

export default class Home extends Component {
 constructor(props){
     super(props);
     this.state = {
        userData: { picture_large:{ data:{}}},
      };
   
 }
 componentDidMount() {
    if(this.props.navigation.state.params != undefined){
        console.log(this.props.navigation.state.params.user);
        this.setState({userData: this.props.navigation.state.params.user});
    }
  } 

    openDrawer = () =>{
        this.props.navigation.navigate('DrawerOpen')}

    searchPage = () =>{
    alert("searching Page")   
        }
  render() {
    console.log('test', this.state.userData.picture_large.data.url);
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
