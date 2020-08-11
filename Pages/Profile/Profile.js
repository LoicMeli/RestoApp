import React from 'react';
import {View,Text} from 'react-native';
import {styles} from './Style.js'
/*

*/
export default class Profile extends React.Component{

	constructor(){
	  super();
    }


    render(){
    	return(
    		<View style={styles.container}>
    			<Text>page qui va contenir le profile du user</Text>
    		</View>
        )
    }
}
