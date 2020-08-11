import React from 'react';
import {Image,View,Text,StyleSheet,Dimensions,Button,TouchableOpacity} from 'react-native'

const {width,height}=Dimensions.get('screen')

class Welcome extends React.Component{
	
	constructor(){
		super();
  }
  render(){
    return(
		
     <View style={{marginTop:500}}>
      <Text style={{textAlign:'center'}}>MainPage</Text>
      <TouchableOpacity
          style={{
      	marginTop:150,
      	borderWidth:1,
      	width:100,
      	backgroundColor:'lightblue',
      	borderRadius:10,
      	paddingBottom:5,
      	marginLeft:width/2-40,
     	    }}
                onPress={()=>this.props.navigation.navigate('Login')}
             >
          <Text style={{textAlign:'center'}}>Commencer</Text>     
      </TouchableOpacity>
     </View>

	    )
	}
}
export default Welcome;
