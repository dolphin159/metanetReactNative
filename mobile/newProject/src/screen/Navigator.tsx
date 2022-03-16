import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Login";
import SignUp from "./SignUp";
import Main from "./Main";
import NewPostScreen from "./NewPostScreen";

const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false
}

const Navigator = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={screenOptions}
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='Main' component={Main} />
            <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Navigator;