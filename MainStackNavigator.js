import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login/LoginScreen';
import HomeScreen from './screens/Home/HomeScreen';
import CreateProduct from './screens/CreateProduct';
import DetailScreen from './screens/Details/DetailScreen';
import Contact from './screens/Contact/Contact';
import ProductsScreen from './screens/Products/ProductsScreen';
const Stack = createNativeStackNavigator();
const MainStackNavigator = () => {
    return(
    <Stack.Navigator >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, headerLeft: ()=> null }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, headerLeft: ()=> null }} />
        <Stack.Screen name="CreateProduct" component = {CreateProduct} options={{ headerShown: false, headerLeft: ()=> null }}/>
        <Stack.Screen name="DetailScreen" component = {DetailScreen} options={{ headerShown: false, headerLeft: ()=> null }}/>
        <Stack.Screen name="Contact" component = {Contact} options = {{headerShown: false, headerLeft: () => null}} />
    </Stack.Navigator>
    );
}

export default MainStackNavigator;