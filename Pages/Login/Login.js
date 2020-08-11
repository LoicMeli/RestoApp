import React from 'react';
import Carousel from 'react-native-anchor-carousel';
import {TouchableOpacity,Switch,ScrollView,Image,PixelRatio,Dimensions,View,Button,Text,TextInput,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {styles} from './Style.js'
import AppNavigator from '../../Navigation/AppNavigator'

const {width,height}=Dimensions.get('screen')
class Login extends React.Component{
  
  constructor(){
      super();
  }
  render(){
  console.log(this.props.natigation)
  	return(
        <View style={{marginTop:300}}>
        <Text style={{textAlign:'center'}}>LoginPage</Text>
          <TouchableOpacity
            style={{
              marginTop:50,
              borderWidth:1,
              width:200,
              backgroundColor:'lightblue',
              borderRadius:20,
              paddingTop:5,
              marginLeft:width/4,
              height:40,
            }}
              onPress={()=>this.props.navigation.navigate('Main')}
               >
            <Text style={{textAlign:'center',color:'white'}}>Login</Text>
          </TouchableOpacity>          
          <TouchableOpacity
            style={{
              marginTop:50,
              borderWidth:1,
              width:200,
              backgroundColor:'lightblue',
              borderRadius:20,
              paddingTop:5,
              marginLeft:width/4,
              height:40,
            }}
              onPress={()=>this.props.navigation.navigate('Register')}
               >
            <Text style={{textAlign:'center',color:'white'}}>SignUp</Text>
          </TouchableOpacity>          
          <TouchableOpacity
            style={{
              marginTop:50,
              borderWidth:1,
              width:200,
              backgroundColor:'lightblue',
              borderRadius:20,
              paddingTop:5,
              marginLeft:width/4,
              height:40,
            }}
              onPress={()=>this.props.navigation.navigate('Confirm')}
               >
            <Text style={{textAlign:'center',color:'white'}}>Reset Password</Text>     
          </TouchableOpacity>
        </View>
    )
  }
}
export default Login;
