import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Login";
import SignUp from "./SignUp";
import Main from "./Main";
import NewPostScreen from "./NewPostScreen";
import Comment from'./Comment'

const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false
}

const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='Main'
            screenOptions={screenOptions}
        >
            <Stack.Screen name='Main' component={Main}/>
            <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
            <Stack.Screen name='Comment' component={Comment} />
        </Stack.Navigator>
    </NavigationContainer>
)

const SignedOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={screenOptions}
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='SignUp' component={SignUp} />
        </Stack.Navigator>
    </NavigationContainer>
)

export { SignedInStack, SignedOutStack };