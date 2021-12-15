import React, { useEffect, useState } from "react";

import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';
import { getAuth} from "firebase/auth";
import Contact from "./screens/Contact/Contact";
import BottomTabNavigator from "./BottomTabNavigator";
import CreateProduct from "./screens/CreateProduct";
import {authentication} from './firebase.js';
const Drawer = createDrawerNavigator();



function LogoutButton(props) {
  let is_signed, admin_email;
  is_signed = getAuth().currentUser;
  admin_email = getAuth().currentUser?.email;
  return (
    
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {is_signed && admin_email == "mertcangokmen@hotmail.com" &&
        <DrawerItem
        label="CreateProduct"
        onPress={props.createButton}
      />
      }
      
      {is_signed &&
      <DrawerItem
        label="Logout"
        onPress={props.logOut}
      />}
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = () => {
  const navigation = useNavigation();
  
  
  const logOut = () => {
    getAuth().signOut()
    .then(() => {
        navigation.navigate("Login");
    })
    .catch(error => alert(error.message));
  }
  const createButton = () => {
    navigation.navigate("CreateProduct");
  }

  return (
    <Drawer.Navigator drawerContent={(props) =>  <LogoutButton {...props}  logOut={logOut} createButton = {createButton}/>}>
      <Drawer.Screen name="ProductsScreen" component={BottomTabNavigator} options={{ headerShown: true}}/>
      <Drawer.Screen name="Contact" component={Contact} options={{ headerShown: true}} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;