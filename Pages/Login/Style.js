import {StyleSheet,Dimensions} from 'react-native';

//recuperation des dimensions de l'ecran du user
const width=Dimensions.get("screen").width;
const height=Dimensions.get("screen").height;

export const styles=StyleSheet.create({
     header:{
      marginBottom:height/78,
      width:width,
      height:height/3.9,
     },
     form:{
      width:width-55,
      marginTop:height/3,
      marginLeft:30
     },
     input:{
      width:width-150,
      marginLeft:10
     },
     img:{
      width:100,
      height:100,
      resizeMode:'contain',
      marginTop:height/15
    },
    logo:{
      width:25,
      height:25,
      resizeMode:'contain',
      marginTop:12
    },
    inputView:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      borderBottomWidth:1,
      width:width-50,
      height:50,
      borderRadius:8,
     marginTop:15 
    },
    title:{
      width:100,
    }
})