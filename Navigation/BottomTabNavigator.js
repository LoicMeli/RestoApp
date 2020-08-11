
import React from 'react';
import {View,Text} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../Pages/Home/Home'
import Favorite from '../Pages/Favorite/Favorite'
import Category from '../Pages/Category/Category'
import Profile from '../Pages/Profile/Profile'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomTabNavigator = createBottomTabNavigator({
  Home: {
  	screen:Home,
  	NavigationOptions:{
  		tabBarLabel:'Home',
  		    tabBarIcon: () => {console.log('hello')
            return <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px"><path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"/></svg>;
          },
  	}},
  Favorite: Favorite,
  Category: Category,
  Profile: Profile
});
export default BottomTabNavigator;
