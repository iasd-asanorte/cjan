import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import LoginScreen from "../screens/LoginScreen"
import SignupScreen from "../screens/SignupScreen"
import ChoiceScreen from "../screens/ChoiceScreen"
import StartScreen from "../screens/StartScreen"

const Root = createStackNavigator()

const Navigation = () => {
    return(
        <NavigationContainer>
            <Root.Navigator screenOptions={{headerShown: false}}>
                <Root.Screen name="Signup" component={SignupScreen} />
                <Root.Screen name="Choice" component={ChoiceScreen} />
                <Root.Screen name="Login" component={LoginScreen} />
                <Root.Screen name="Start" component={StartScreen} />
            </Root.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;

