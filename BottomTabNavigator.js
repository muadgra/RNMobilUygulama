import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainStackNavigator from "./MainStackNavigator";
import ContactStackNavigator from "./ProductStackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="LoginScreen" component={MainStackNavigator} options={{ headerShown: false}}/>
        <Tab.Screen name="ProductsScreen" component={ContactStackNavigator} options={{ headerShown: false}}/>
      </Tab.Navigator>
    );
  };
  
  export default BottomTabNavigator;