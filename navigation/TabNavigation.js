import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../theme/colors';
import {    
    MaterialCommunityIcons,
    Ionicons,
    Feather,
  } from '@expo/vector-icons';

import HomeScreen from "../screens/HomeScreen"
import MusicsScreen from "../screens/MusicsScreen"

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,            
                tabBarStyle: {backgroundColor: colors.secondaryBg, borderTopWidth: 0, paddingBottom: 5},
                tabBarActiveTintColor: colors.violet,
                tabBarInactiveTintColor: colors.white,                
            }}>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="home-outline" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Agenda" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="calendar-check-outline" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Músicas" 
                component={MusicsScreen} 
                options={{
                    tabBarIcon: ({color}) => (
                        <Ionicons name="ios-musical-notes-outline" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Partituras" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="folder-music-outline" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Perfil" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({color}) => (
                        <Feather name="user" size={20} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigation;