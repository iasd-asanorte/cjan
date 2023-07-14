import React from "react"
import { createStackNavigator } from '@react-navigation/stack'

import ProfileScreen from "../screens/ProfileScreen"
import EditProfileScreen from "../screens/EditProfileScreen"

const Stack = createStackNavigator()

const ProfileNavigation = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        </Stack.Navigator>
    )
}

export default ProfileNavigation;

