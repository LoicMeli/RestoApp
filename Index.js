import React from 'react';
import {View,Text} from 'react-native';
import AppNavigator from './Navigation/AppNavigator'
import Login from './Pages/Login/Login'
import Welcome from './Pages/Welcome/Welcome.js'

class Index extends React.Component{

	constructor(){
		super();

	}
    render(){
		return(
		    <AppNavigator/>
	    )
	}
}
export default Index;