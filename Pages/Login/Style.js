import {StyleSheet,Dimensions} from 'react-native';

//recuperation des dimensions de l'ecran du user
const width=Dimensions.get("screen").width;
const height=Dimensions.get("screen").height;

export const styles=StyleSheet.create({
   init:{
    marginTop:500
   }  
})