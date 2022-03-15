import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Main from "./Main";
import NewPostScreen from "./NewPostScreen";

const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false
}

const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="='Main"
            screenOptions={screenOptions}
        >
            <Stack.Screen name='Main' component={Main} />
            <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default SignedInStack;