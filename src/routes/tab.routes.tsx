/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
//import Home from "../screens/Home";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';

import Home from '../screens/Home';
import AddPhoto from '../screens/AddPhoto';
import Profile from '../screens/Profile';

//icones
import homeIcon from '../../assets/imgs/homeIcon.png';
import postIcon from '../../assets/imgs/postIcon.png';
import profileIcon from '../../assets/imgs/profileIcon.png';

const Tab = createMaterialTopTabNavigator();
  
class AppTab extends Component
{
  render() 
  {
    return (
      <Tab.Navigator
        tabBarPosition='bottom'
        screenOptions={{
          tabBarStyle: {backgroundColor: '#000', height: 60}, 
          tabBarLabelStyle: {color: '#d3d3d3'}, 
          tabBarPressColor: '#111', 
          tabBarIndicatorStyle: {backgroundColor: '#ff1493', height: 1}}}
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarLabel: '', 
            tabBarIcon: ({ focused }) =>
              focused ? 
                (<Image source={homeIcon} style={{width: 30, height:30, tintColor: '#f8f8ff'}}/>) : 
                (<Image source={homeIcon} style={{width: 25, height:25, tintColor: '#696969'}}/>)}}
        />
        <Tab.Screen 
          name="AddPhoto" 
          component={AddPhoto}
          options={{
            tabBarLabel: '', 
            tabBarIcon: ({ focused }) =>
              focused ? 
                (<Image source={postIcon} style={{width: 30, height:30, tintColor: '#f8f8ff'}}/>) : 
                (<Image source={postIcon} style={{width: 25, height:25, tintColor: '#696969'}}/>)}}
        />
        <Tab.Screen 
          name="Profile" 
          component={Profile}
          options={{
            tabBarLabel: '', 
            tabBarIcon: ({ focused }) =>
              focused ? 
                (<Image source={profileIcon} style={{width: 30, height:30, tintColor: '#f8f8ff'}}/>) : 
                (<Image source={profileIcon} style={{width: 25, height:25, tintColor: '#696969'}}/>)}}
        />
      </Tab.Navigator>
    )
  }
}

export default AppTab;