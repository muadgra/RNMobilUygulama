import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login/LoginScreen';
import HomeScreen from './screens/Home/HomeScreen';
import CreateProduct from './screens/CreateProduct';
const Stack = createNativeStackNavigator();
const MainStackNavigator = () => {
    return(
    <Stack.Navigator >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, headerLeft: ()=> null }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, headerLeft: ()=> null }} />
        <Stack.Screen name="CreateProduct" component = {CreateProduct} options={{ headerShown: false, headerLeft: ()=> null }}/>
    </Stack.Navigator>
    );
}

export default MainStackNavigator;