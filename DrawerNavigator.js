import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Contact from "./screens/Contact/Contact";
import BottomTabNavigator from "./BottomTabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ProductsScreen" component={BottomTabNavigator} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;