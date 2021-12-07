import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login/LoginScreen';
import HomeScreen from './screens/Home/HomeScreen';
const Stack = createNativeStackNavigator();
const MainStackNavigator = () => {
    return(
    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}}name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
    );
}

export default MainStackNavigator;