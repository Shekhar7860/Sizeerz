import React, {Component} from 'react';
import {ScrollView, Text, View, ImageBackground, Image} from 'react-native';
import Service from '../services/Service';


class SideMenu extends Component {
  constructor(props){
    super(props);
    console.log('propvalue', props)
    this.state = {
       usrData: { picture_large:{ data:{}}},
     };
  
}
componentDidMount() {
  console.log('newVal', service.getUserData('user'))
  service.getUserData('user').then((keyValue) => {
    var parsedData = JSON.parse(keyValue);
    console.log('parsed Data',  parsedData)
    this.setState({usrData: parsedData});
    }, (error) => {
    console.log(error) //Display error
  });
  
 } 

  render () {
    console.log('sideMenudata'+ JSON.stringify(this.state.usrData))
    return (
      <ImageBackground
      source={require('../images/bg03.png')}
      style={styles.container}>
      <View style={styles.sideMenu}>
      <Image source={{uri: this.state.usrData.picture_large.data.url}}
       style={styles.profilePic} /> 
        <Text style={styles.userName}>{this.state.usrData.name}</Text>
       
       </View>
   </ImageBackground>
     
     
    );
  }
}



export default SideMenu;