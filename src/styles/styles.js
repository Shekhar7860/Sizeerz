// global styles 
import {colors, fonts, padding, dimensions} from './base.js'
import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: padding.sm,
    paddingVertical: padding.lg,
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
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
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
      flexDirection:'row', flexWrap:'wrap'
    },
    card:{
      backgroundColor:'#FFFFFF',
      marginTop:200,
      height:200,
      padding:padding.sm
    },
    loginbutton:{
     width:20,
     borderRadius:20,
     textTransform:'lowercase',
     backgroundColor:colors.secondary
    },
    messageBox:{
      backgroundColor:'#ef553a',
      width:300,
      paddingTop:10,
      paddingBottom:20,
      paddingLeft:20,
      paddingRight:20, 
      borderRadius:10
  },
  
  messageBoxTitleText:{
      fontWeight:'bold',
      color:'#fff',
      textAlign:'center',
      fontSize:20,
      marginBottom:10
  },
  toolbar:{
    backgroundColor:'#81c04d',
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row'    //Step 1
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
  }
    
})