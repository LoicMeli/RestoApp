import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import BottomTabNavigator from './BottomTabNavigator';
import LoginNavigator from '../Pages/Login/Login'
import WelcomeScreen from '../Pages/Welcome/Welcome'
import ConfirmScreen from '../Pages/Confirm/Confirm'
import RegisterScreen from '../Pages/Register/Register'

// export default createAppContainer(
//   createSwitchNavigator({

//     Main: BottomTabNavigator,
//     Login: LoginNavigator
//   })
// );

export default createAppContainer(
	createStackNavigator({
		Main:{
			screen:BottomTabNavigator
		},
		Welcome:{
			screen:WelcomeScreen
		},
		Login:{
			screen:LoginNavigator			
		},
		Register:{
			screen:RegisterScreen			
		},		
		Confirm:{
			screen:ConfirmScreen			
		}
	}, 
       {
       	initialRouteName:'Welcome',
       	headerMode:'none'}
	)) 