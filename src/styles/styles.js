// global styles 
import {colors, fonts, padding, dimensions} from './base.js'
import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  container: {
   
    width: dimensions.fullWidth
  },
  header: {
    fontSize: fonts.lg,
    fontFamily: fonts.primary
  },
  section: {
    paddingVertical: padding.lg,
    paddingHorizontal: padding.xl
  },
  red: {
    color:'red'
  },
  container: {
    flex: 1,
    resizeMode: 'cover'
   
  },
  loginText: {
    color:'red',
    padding:padding.sm,
    },
    alignrow:{
      flexDirection:'row',
      flex:1,  
    },
    col:{
      flexDirection:'row',
       flexWrap:'wrap'
    },
    cardContainer:{
     width:'80%',
     backgroundColor:'#fff',
     padding:10,
     height:190,
     borderColor: 'black',
     borderWidth: 1,
     marginTop:-10,
     
   
   

    },
   
    messageBox:{
      width:'90%',
      paddingTop:5,
      alignItems:'center',
    
      height:240
  },
  messageBoxTitleText:{
      fontWeight:'bold',
      color:'#fff',
      textAlign:'center',
      fontSize:20,
      marginBottom:10
  },
  toolbar:{
   
    paddingTop:20,
    paddingBottom:10,
    flexDirection:'row'
     //Step 1
},
toolbarButton:{
    width: 50,            //Step 2
    color:'#fff',
    textAlign:'center'
},
toolbarTitle:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
    flex:1                //Step 3
 },
  messageBoxBodyText:{
      color:'#fff',
      fontSize:16
  },
  textContainer:{
    paddingTop:15,
    width:'95%',
    alignItems:'flex-end',
  },
  imgContainer:{
    padding:10,
    width:'90%',
    alignItems:'flex-start',
  },
  topText:{
    color:'white',
    textAlign:'left',
    fontSize:20,
    fontWeight:'bold'
  },
  splashLoading:{
    flex:1,
  justifyContent:'center'
  },
  imageContainer:{
    paddingTop:5,
    alignItems:'center',
  },
  imageWidth:{
  },
  centerAlign :{
   alignItems:'center',
   paddingTop:70,
 
   
  },
  loginText:{
    color:'red',
  },
  textBorder:{
    borderBottomColor: 'red',
    borderBottomWidth: 1
  },
  borderWidth : {
    paddingTop:2,
    width:42
  },
  borderWidthSignUp : {
    paddingTop:2,
    width:50
  },
  borderWidthForgot : {
    paddingTop:2,
    width:127
  },
  textInputContainer:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  textInputContainer2:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingTop:10
  },
  iconWidth:{
    width:30,
    height:30
  },
  labelWidth:{
  
    
    
  },
  float:{
    flex: 1, backgroundColor: '#f5fcff'
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
searchIcon: {
    padding: 10,
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
},
icon:{
  width:20,
  height:20,
  marginTop:12
},
socialIcon:{
  width:40,
  height:40,
  marginTop:12
},
border:{
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  flex:1
},
rowAlign:{
  flexDirection:'row',
  borderBottomColor: 'black',
  borderBottomWidth: 1
  

},
loginContainer:{

  alignItems:'center'
  
  
  
},
buttonWidth:{
  width:300,
  alignItems:'center'
},
loginbutton:{
backgroundColor:'red',
color:'white',
width:70,
textAlign:'center',
height:30,
borderRadius:10,
position:'relative',
bottom:14,
paddingTop:4,
 },
 center:{
   paddingTop:20,
   alignItems:'center'
 },
 borderWidth2 : {
  paddingTop:2,
  width:98
},
textBorder2:{
  borderBottomColor: 'black',
  borderBottomWidth: 1
},
rowAlign2:{
  flexDirection:'row',
  alignItems:'center',
  
},
rowAlign3:{
  flexDirection:'row',
  alignItems:'center',
  paddingTop:5
  
},
textCenter:{
  textAlign:'center'
},
borderWidth3 : {
  paddingTop:18,
  width:95
},
bottomText:{
  alignItems:'center',
  paddingTop:10
},
cardContainerSignUp:{
  width:'80%',
  padding:10,
  height:270,
  borderColor: 'black',
  borderWidth: 1,
  marginTop:-30,
  backgroundColor:'#fff',
 },
 cardContainerForgot:{
  width:'80%',
  padding:10,
  height:200,
  borderColor: 'black',
  borderWidth: 1,
  marginTop:-40,
  backgroundColor:'#fff',
 },
 topSpace:{
   marginTop:0
 },
 signUpButton:{
  backgroundColor:'red',
  color:'white',
  width:83,
  textAlign:'center',
  height:30,
  borderRadius:10,
  position:'relative',
  bottom:13,
  paddingTop:5,
   },
   forgotText:{
     paddingTop:padding.md
   },
   hamburgerIcon:{
     width:30,
     height:30,
    marginLeft:25},
    searchIcon:{
      width:30,
      height:30,
     marginRight:25},
     homeContent:{
       alignItems:'center',
       width:'100%'
     },
     cardImage:{
       width:'90%',
       height:220,
       borderRadius:25,
     
     },
     sideMenu:{
     alignItems:'center',
     
     },
    profilePic:{
      marginTop:30,
      borderRadius:100,
      width:'40%',
     height:'40%'
    
    },
    userName:{
      paddingTop:10,
      color:colors.white
    }
})