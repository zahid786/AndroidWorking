import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Icon} from 'native-base'
import Home from '../Home'
import Subscriptions from '../Subscriptions' 
import MyFile from '../MyFile'
import Me from '../Me'
import Trending from '.././Home/Tabs/Ternding'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";

 class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Main </Text>
      </View>
    );
  }
}
const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    // screen:Trending
  }
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });

 const SubscriptionsStack = createStackNavigator({
  Subscriptions: Subscriptions
  
 },{
  headerMode: 'none',
 }
 );
 const MyFileStack = createStackNavigator({
  MyFile: MyFile
  
 }
 ,{
  headerMode: 'none',
 }
 );
 const MeStack = createStackNavigator({
   Me:Me
 }
 ,{
  headerMode: 'none',
 }
 );

 const ButtomNavigation = createBottomTabNavigator({
   Home:HomeStack,
   Subscriptions:SubscriptionsStack,
   MyFile:MyFileStack,
   Me:MeStack
 },{
   defaultNavigationOptions:({navigation})=>({
     tabBarIcon:({focused,horizontal,tintColor})=>{
       const {routeName} = navigation.state;
       let iconName;
       let iconType;
       let zahid;
       if(routeName==="Home"){
        iconName='home',
        iconType='Entypo'
        
       }
       else if(routeName==="Subscriptions"){
         iconName='subscriptions',
         iconType='MaterialIcons'
       }
       else if(routeName==="MyFile"){
        iconName='file-download',
        iconType='FontAwesome5'
       }
       else{
        iconName='sentiment-satisfied',
        iconType='MaterialIcons'
       }
       focused ? zahid='green': zahid='blue'
       return(
         <Icon
          name={iconName}
          type={iconType}
          style={{color: zahid}}
         />
       )
     }
   })
 })

 

export default createAppContainer(ButtomNavigation);