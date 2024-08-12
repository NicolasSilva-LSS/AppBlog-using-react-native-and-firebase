/* eslint-disable prettier/prettier */
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import React, { Component } from 'react';
import {
  Easing,
} from 'react-native';
//import Home from "../screens/Home";
import Options from "../screens/Options";
import AppTab from "./tab.routes";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createStackNavigator();

const config = {
    animation: 'spring',
    config: {
      stiffness: 800,
      damping: 500,
      mass: 3,
      overshootClamping: false,
      restDisplacementThreshold: 1,
      restSpeedThreshold: 1,
    }
  }
  
  const closeConfig = {
    animation: 'timing',
    config: {
      duration: 200,
      easing: Easing.linear,
    }
  }

  //GettingTitles
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'AddPhoto':
      return 'AddPhoto';
    case 'Profile':
      return 'Profile';
  }
}

class AppStack extends Component
{
  render() 
  {
    return (
      <Stack.Navigator
        // apply for all screen
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerStyle: {backgroundColor: '#000'},
          headerTitleStyle: { color: '#d3d3d3'},
          headerTintColor: '#d3d3d3',
        }}
        // headerMode="none"
      >
        {/*<Stack.Screen name="Feed" component={AppTab} options={({route}) => ({headerTitle: getHeaderTitle(route)})}/>*/}
        <Stack.Screen name="Feed" component={AppTab} options={{headerShown: false}}/>
        <Stack.Screen name="Options" component={Options}
          options={{
            gestureDirection: 'horizontal',
            transitionSpec: {
              open: config,
              close: closeConfig,
            },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen name="Login" component={Login}
          options={{
            gestureDirection: 'vertical-inverted',
            transitionSpec: {
              open: config,
              close: closeConfig,
            },
            cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
          }}
        />
        <Stack.Screen name="Register" component={Register}
          options={{
            gestureDirection: 'vertical',
            transitionSpec: {
              open: config,
              close: closeConfig,
            },
            cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          }}
        />
      </Stack.Navigator>
    )
  }
}

export default AppStack;