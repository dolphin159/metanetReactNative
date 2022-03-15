import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from './Login'
import SignUp from './SignUp';

const Stack = createStackNavigator();

const LoginNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Login" component={Login} options={{ title: '' }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ title: '회원가입' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default LoginNavigator;