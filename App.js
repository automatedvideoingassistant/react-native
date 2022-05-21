import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import React from "react";


import HomePage from "./src/pages/HomePage";
import CameraPage from "./src/pages/CameraPage";

const Tabs = createBottomTabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="home" color={tintColor} size={24} />
            )
        }
    },
    Camera: {
        screen: CameraPage,
        navigationOptions: {
            tabBarLabel: "Camera",
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="camera" color={tintColor} size={24} />
            )
        }
    }
});

const stack = createStackNavigator(
    {
        Home: {
            screen: Tabs,
			navigationOptions:{
				headerShown: false
			},
        }

    },
    {
        initialRouteName:"Home",
        tabBarOptions: {
            activeTintColor: 'blue',
            inactiveTintColor: 'grey'
        }
    }

)



export default createAppContainer(stack);