import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import {View,Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }
},
{
    initialRouteName: 'Menu',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
}
);

const HomeNavigator =createStackNavigator({
  Home : {screen : Home}
},{
  defaultNavigationOptions:{
    headerStyle: {
      backgroundColor: "#512DA8"
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
      color: "#fff"            
  }
  }
}
);

const MainNavigator  =createDrawerNavigator({
  Home : {
    screen : HomeNavigator,
    // defaultNavigationOptions:{
    //   title : 'Home',
    //   drawerlabel : 'Home'
    // }
  },
  Menu : {
    screen : MenuNavigator,
    // defaultNavigationOptions:{
    //   title : 'Menu',
    //   drawerlabel : 'Menu'
    // }
  }, 
},{
  drawerBackgroundColor : '#D1C4B9'
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selecteddish:null
    };
  }
  render() {
 
    return (
        <View style={{flex:1, paddingTop : Platform.OS ==='ios' ? 0 :Expo.Constants.statusBarHeight}}>
        <MainNavigator />
        </View>
    );
  }
}
  
export default createAppContainer(MainNavigator);