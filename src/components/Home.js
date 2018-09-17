import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground, Button} from 'react-native';
import styles from '../styles/styles';

export default class Home extends Component {
    openDrawer2 = () =>{
        console.log(this.props);
        this.props.navigation.navigate('DrawerOpen')}
  render() {
    return (
      <View style={styles.mainContainer}>
      <View style={styles.toolbar}>
           <Text style={styles.toolbarButton}>Add</Text>
           <Text style={styles.toolbarTitle}>This is the title</Text>
           <Text style={styles.toolbarButton}>Like</Text>
       </View>
       <View style={styles.content}>

           {/* START NEW CODE */}

           <View style={styles.messageBox}>
               <View>
                   <Text style={styles.messageBoxTitleText}>A simple mesage</Text>
               </View>
               <View>
                   <Text style={styles.messageBoxBodyText}>This is just a dummy sample it will help us to see the alignment in action.</Text>
               </View>
           </View>

     {/* END NEW CODE */}

       </View>
   </View>
      
     
    );
  }
}
