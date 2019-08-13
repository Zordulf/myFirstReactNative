import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TouchableOpacity
} from 'react-native';

import { createStackNavigator } from  'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";
import MainScreen from "../MainScreen";
import Calculator from "../Calculator";
import AboutScreen from "../AboutScreen";

const stackNav = createStackNavigator({
  Main : {
    screen: MainScreen,
    navigationOptions: ({navigation}) => ({
      title: "Menu",
      headerLeft:(<TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <IOSIcon name="ios-menu" size={30} />
                  </TouchableOpacity>
      ),
      //headerStyle: { paddingRight: 10, paddingLeft: 15 }
    })
  },
  Calculator: {
    screen: Calculator,
    navigationOptions: ({navigation}) => ({
      title: "Calculator",
    })     
  },
  About: {
    screen: AboutScreen,
    navigationOptions: ({navigation}) => ({
      title: "About",
    })     
  }
});

export default stackNav;