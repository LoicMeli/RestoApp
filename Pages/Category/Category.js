import React from 'react';
import {View,Text} from 'react-native';
import {styles} from './Style.js'
/*

*/
export default class Category extends React.Component{

	constructor(){
	  super();
    }


    render(){
    	return(
    		<View style={styles.container}>
    			<Text>page qui va contenir les Categories de menus</Text>
    		</View>
        )
    }
}
