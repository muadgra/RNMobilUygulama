import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainStackNavigator from "./MainStackNavigator";
import ProductStackNavigator from "./ProductStackNavigator";
import HomeScreen from "./screens/Home/HomeScreen";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={MainStackNavigator} options={{ headerShown: false}}/>
        <Tab.Screen name="ProductsScreen" component={ProductStackNavigator} options={{ headerShown: false}}/>
      </Tab.Navigator>
    );
  };
  
  export default BottomTabNavigator;