import React, {Component} from 'react';
import {ScrollView, Text, View, ImageBackground, Image} from 'react-native';
import Service from '../services/Service';
import Constants from '../constants/Constants';

class SideMenu extends Component {
  constructor(props){
    super(props);
    console.log('propvalue', props);
    service = new Service();
    constants = new Constants();
    this.state = {
       userFbData: { picture_large:{ data:{}}},
       userGoogleData:{},
       name:""
     };
     
  
}
componentDidMount() {
//  console.log('newVal', service.getUserData('user'))
  service.getUserData('user').then((keyValue) => {
    var parsedData = JSON.parse(keyValue);
    console.log('parsed Data',  parsedData)
  //  this.setState({usrData: parsedData});
  if(parsedData.picture_large != undefined)
  {
   this.setState({userFbData: parsedData, name:"fb"});
  }
  else
  {
    this.setState({userGoogleData: parsedData, name:"google"});
  }
    }, (error) => {
    console.log(error) //Display error
  });
  
 } 

  render () {
   // console.log("Fbdata",  this.state.userFbData, "GoogleData", this.state.userGoogleData)
   const defaultImage = <Image  source={require('../images/profile.png')} style={styles.profilePic} />;
   const fbImage = <Image source={{uri: this.state.userFbData.picture_large.data.url}} style={styles.profilePic} />;
   const GoogleImage = <Image source={{uri: this.state.userGoogleData.photo }} style={styles.profilePic} />;
   const fbName = <Text style={styles.userName}>{this.state.userFbData.name}</Text>
   const GoogleName = <Text style={styles.userName}>{this.state.userGoogleData.name}</Text>
      
     let userImage;
     let userName;
        if (this.state.name == "fb") {
          if(fbImage.props.source.uri !== null){
            userImage =  fbImage
          }
          else
          {
            userImage = defaultImage
          }
           userName = fbName
        } 
        else if(this.state.name == "google") {
              if(GoogleImage.props.source.uri !== null){
                userImage = GoogleImage
              }
              else
              {
                userImage = defaultImage
              }
             userName = GoogleName
        }
        else {

        }
       
    return (
      <ImageBackground
      source={constants.loginbg}
      style={styles.container}>
      <View style={styles.sideMenu}>
      {userImage}
      {userName}
       </View>
   </ImageBackground>
     
     
    );
  }
}



export default SideMenu;