import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { COLORS, SIZES, FONTS, icons } from '../constants';
import {HomeScreen} from "../screens";

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel : false,
    style : {
        height: "10%"
    }
}

const Tabs = () => {
  return (
   <Tab.Navigator 
            tabBarOptions={tabOptions}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                const tintColor = focused ? COLORS.primary : COLORS.black;

                switch (route.name) {
                    case "Home":
                        return(
                            <Image
                                source={icons.home}
                                resizeMode="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 25
                                }}
                            />
                        )
                    case "Chat":
                        return(
                                <Image
                                source={icons.chats}
                                resizeMode="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 25
                                }}
                            />
                        )
                    case "Add":
                        return(
                            <Image
                                 source={icons.add}
                                 resizeMode="contain"
                                  style={{
                                        tintColor: tintColor,
                                        width: 45,
                                        height: 45
                                  }}
                            
                            />
                        )
                    case "Notifications":
                        return(
                                <Image
                                source={icons.notifications}
                                resizeMode="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 25
                                }}
                            />
                        )
                    case "Profile":
                        return(
                                <Image
                                source={icons.profile}
                                resizeMode="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 25
                                }}
                            />
                        )
                        
               
                }
            }
        })}>
             <Tab.Screen
                name="Home"
                component={HomeScreen}
                // options={{ headerShown: false}}
            />
            <Tab.Screen
                name="Chat"
                component={HomeScreen}
                options={{ headerShown: false}}
            />
            <Tab.Screen
                name="Add"
                component={HomeScreen}
                options={{ headerShown: false}}
            />
            <Tab.Screen
                name="Notifications"
                component={HomeScreen}
                options={{ headerShown: false}}
            />
            <Tab.Screen
                name="Profile"
                component={HomeScreen}
                // component={ProfileScreen}
                // options={{ headerShown: false}}
            />

   </Tab.Navigator>
  )
}

export default Tabs;

const styles = StyleSheet.create({})