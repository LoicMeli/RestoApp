import React from 'react';
import {Image,View,Text,StyleSheet,Dimensions,Button,TouchableOpacity} from 'react-native'
import {styles} from './Style.js'


const {width,height}=Dimensions.get('screen')

class Confirm extends React.Component{

	constructor(){
		super();
	}

	render(){

		return(
			<View style={{marginTop:500}}>
        <Text style={{textAlign:'center'}}>Confirm email PagePage</Text>
          <TouchableOpacity
                      style={{
                    marginTop:50,
                    borderWidth:1,
                    width:200,
                    backgroundColor:'lightblue',
                    borderRadius:20,
                    paddingTop:5,
                    height:40,
                    marginLeft:width/4,
                      }}
                            onPress={()=>this.props.navigation.navigate('Login')}
                         >
                      <Text style={{textAlign:'center',color:'white'}}>Sign Up</Text>     
          </TouchableOpacity>
        </View>
	    )
	}
}
export default Confirm;