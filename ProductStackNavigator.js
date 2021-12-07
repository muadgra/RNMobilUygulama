import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsScreen from './screens/Products/ProductsScreen';
const Stack = createNativeStackNavigator();
const ProductStackNavigator = () => {
    return(
    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="ProductsScreen" component={ProductsScreen}/>
    </Stack.Navigator>
    );
}

export default ProductStackNavigator;