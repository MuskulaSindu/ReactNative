import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import {View,Platform,Text,ScrollView,Image,StyleSheet,SafeAreaView} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';
import {Card,Icon} from 'react-native-elements';
//import {Icon} from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons';
import {MaterialIcons} from 'react-native-vector-icons';


import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';


const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu ,
            navigationOptions:({navigation}) =>({
              headerLeft : <Icon name="menu" size={24} color="white" onPress={() => navigation.toggleDrawer()} />
            })
    
    },
    Dishdetail: { screen: Dishdetail }
},
{
    initialRouteName: 'Menu',
    defaultNavigationOptions:({navigation}) =>({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    })
}
);

const HomeNavigator =createStackNavigator({
  Home : {screen : Home}
},{
  defaultNavigationOptions:({navigation})=>({
    headerStyle: {
      backgroundColor: "#512DA8"
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
      color: "#fff"            
  },
  headerLeft : <MaterialIcons name="menu" size={24} color="white" onPress={() => navigation.toggleDrawer()} />
  })

});

const ContactNavigator=createStackNavigator({
  Contact : {screen:Contact}
},{
  defaultNavigationOptions:({navigation})=>({
    headerStyle:{
      backgroundColor: "#512DA8"
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        color: "#fff"            
    },
    headerLeft : () => <Icon name="menu" size={24} color="white" onPress={() => navigation.toggleDrawer()} /> 
  })
});

const AboutNavigator=createStackNavigator({
  About : {screen:About}
},{
  defaultNavigationOptions:({navigation})=>({
    headerStyle:{
      backgroundColor: "#512DA8"
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        color: "#fff"            
    },
    headerLeft : <Icon name="menu" size={24} color="white" onPress={() => navigation.toggleDrawer()} /> 
  })
});



const CustomDrawerContentComponent = (props) => (
  <ScrollView>
      <View style={styles.drawerHeader}>
        <View style={{flex:1}}>
        <Image source={require('../assets/images/logo.png')} style={styles.drawerImage} />
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
        </View>
      </View>
      <DrawerItems {...props} />
  
  </ScrollView>
);
//  const Drawing=()=>{
//   <Icon name="home" type="font-awesome" />
// }
const MainNavigator  =createDrawerNavigator({
  Home : {
    screen : HomeNavigator,
    navigationOptions:{
      title : 'Home',
      drawerlabel : 'Home',
         drawerIcon: ({ tintColor }) =>  <MaterialIcons name="home" size={25} color={tintColor} />
    }
  },
  Menu : {
    screen : MenuNavigator,
    navigationOptions:{
      title : 'Menu',
      drawerlabel : 'Menu',
       drawerIcon :({tintColor}) => (
         <Icon name='list' type='font-awesome' size={24} color={tintColor} />
       )
    }
  },
  Contact : {
    screen : ContactNavigator,
    navigationOptions:{
      title : 'Contact Us',
      drawerlabel : 'Contact Us',
       drawerIcon :({tintColor}) => (
         <Icon name='address-card' type='font-awesome' size={24} color={tintColor} />
      )
  }
}, 
  About : {
    screen : AboutNavigator,
    navigationOptions:{
      title : 'About Us',
      drawerlabel : 'About Us',
       drawerIcon :({tintColor}) => (
         <Icon name='info-circle' type='font-awesome' size={24} color={tintColor} />
       )
  }
} 
},{
  drawerBackgroundColor : '#D1C4B9',
  contentComponent : CustomDrawerContentComponent

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

const styles = StyleSheet.create({
  
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});

  
export default createAppContainer(MainNavigator);